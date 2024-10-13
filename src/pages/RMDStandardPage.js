import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Divider, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReactDOMServer from 'react-dom/server';
import rmdRegulations from '../data/rmdStandards';

const PageWrapper = styled(Box)({
  paddingTop: '100px',
  paddingLeft: '300px',
  minHeight: '60vh',
  backgroundColor: '#fff',
});

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  height: '95%',
  position: 'fixed',
  top: '150px',
  left: '200px',
  right: 0,
  backgroundColor: '#fff',
}));

const LeftSection = styled(Box)(({ theme }) => ({
  width: '35%',
  overflowY: 'auto',
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(15),
  borderRight: `1px solid ${theme.palette.divider}`,
  height: '85%',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
}));

const RightSection = styled(Box)(({ theme }) => ({
  width: '65%',
  overflowY: 'auto',
  paddingLeft: theme.spacing(10),
  marginRight: theme.spacing(20),
  height: '85%',
  backgroundColor: '#fff',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  fontWeight: 'bold',
}));

const RegulationButton = styled(Button)(({ theme, selected }) => ({
  marginBottom: theme.spacing(1),
  justifyContent: 'flex-start',
  textTransform: 'none',
  backgroundColor: selected ? theme.palette.action.hover : 'inherit',
  color: selected ? theme.palette.primary.main : 'inherit',
}));

const LeftSectionHeader = styled(Box)({
  position: 'sticky',
  top: 0,
  backgroundColor: '#fff',
  zIndex: 1,
  paddingBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
});

const SearchContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '36px',
    fontSize: '0.875rem',
  },
  '& .MuiInputBase-input': {
    padding: '4px 8px',
  },
  width: '200px', // 고정된 너비 설정
});

const SearchNavigation = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '10px',
});

const NavigationArrow = styled(IconButton)({
  padding: '4px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
});

function RMDStandardPage() {
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [content, setContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [highlightedNodes, setHighlightedNodes] = useState([]);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(-1);
  const rightSectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleRegulationClick = async (regulation) => {
    setSelectedRegulation({
      ...regulation,
      revisionNumber: '00',
      revisionDate: '2024.07.01',
    });
    try {
      const module = await import(`../data/${regulation.id}_Content`);
      let contentComponent = <module.default />;
      // 하이라이트 기능 제거
      setContent(contentComponent);
      if (rightSectionRef.current) {
        rightSectionRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error('콘텐츠 로딩 오류:', error);
      setContent(
        <Typography variant="body1">
          콘텐츠를 불러올 수 없습니다. ({regulation.id})
        </Typography>
      );
    }
  };

  const highlightSearchTerm = () => {
    if (searchTerm && contentRef.current) {
      const textNodes = [];
      const walker = document.createTreeWalker(
        contentRef.current,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );

      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue.toLowerCase().includes(searchTerm.toLowerCase())) {
          textNodes.push(node);
        }
      }

      // Remove previous highlights
      highlightedNodes.forEach((node) => {
        if (node.parentElement) {
          node.parentElement.replaceWith(node);
        }
      });

      const newHighlightedNodes = textNodes.map((textNode) => {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const newNode = document.createElement('span');
        newNode.innerHTML = textNode.nodeValue.replace(regex, '<mark style="background-color: yellow;">$1</mark>');
        textNode.parentNode.replaceChild(newNode, textNode);
        return newNode;
      });

      setHighlightedNodes(newHighlightedNodes);
      setCurrentHighlightIndex(newHighlightedNodes.length > 0 ? 0 : -1);

      if (newHighlightedNodes.length > 0) {
        newHighlightedNodes[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    highlightSearchTerm();
  }, [content, searchTerm]);

  const navigateHighlight = (direction) => {
    if (highlightedNodes.length === 0) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentHighlightIndex + 1) % highlightedNodes.length;
    } else {
      newIndex = (currentHighlightIndex - 1 + highlightedNodes.length) % highlightedNodes.length;
    }

    setCurrentHighlightIndex(newIndex);
    highlightedNodes[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term) {
      setSearchResults([]);
      return;
    }

    const results = [];
    for (const category of rmdRegulations) {
      for (const item of category.items) {
        try {
          const module = await import(`../data/${item.id}_Content`);
          const contentComponent = <module.default />;
          const htmlString = ReactDOMServer.renderToString(contentComponent);
          if (htmlString.toLowerCase().includes(term.toLowerCase())) {
            results.push({ ...item, category: category.category });
          }
        } catch (error) {
          console.error('콘텐츠 로딩 오류:', error);
        }
      }
    }
    setSearchResults(results);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${selectedRegulation.title}</title>
          <style>
            @page {
              size: auto;
              margin: 30mm 0mm; 
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
            body { 
              font-family: Arial, sans-serif; 
              margin: 0mm 25mm;
              font-size: 12px;
              line-height: 1.6;
              -webkit-print-color-adjust: exact;
            }
            h1 { 
              font-size: 24px; 
              text-align: center; 
              margin-bottom: 20px;
            }
            table { 
              border-collapse: collapse; 
              width: 100%; 
              margin-bottom: 20px;
            }
            th, td { 
              border: 1px solid black; 
              padding: 6px; 
              text-align: left; 
              font-size: 12px;
            }
            th {
              background-color: #f2f2f2;
            }
            .document-header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
          </style>
        </head>
        <body>
          <h1>${selectedRegulation.title}</h1>
          ${contentRef.current.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();

    printWindow.onload = function () {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <PageWrapper>
      <Container>
        <LeftSection>
          <LeftSectionHeader>
            <SearchContainer>
              <StyledTextField
                variant="outlined"
                size="small"
                placeholder="검색"
                value={searchTerm}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: searchTerm && (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="clear search"
                        onClick={clearSearch}
                        edge="end"
                        size="small"
                      >
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {searchTerm && highlightedNodes.length > 0 && (
                <SearchNavigation>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    {currentHighlightIndex + 1} / {highlightedNodes.length}
                  </Typography>
                  <NavigationArrow onClick={() => navigateHighlight('prev')} size="small">
                    <ArrowUpwardIcon fontSize="small" />
                  </NavigationArrow>
                  <NavigationArrow onClick={() => navigateHighlight('next')} size="small">
                    <ArrowDownwardIcon fontSize="small" />
                  </NavigationArrow>
                </SearchNavigation>
              )}
            </SearchContainer>
            <Typography variant="h6" style={{ marginBottom: '10px' }}>
              원료제조팀 규정
            </Typography>
          </LeftSectionHeader>
          {searchTerm ? (
            <Box>
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <RegulationButton
                    key={item.id}
                    variant="text"
                    fullWidth
                    onClick={() => handleRegulationClick(item)}
                    selected={selectedRegulation?.id === item.id}
                  >
                    {`${item.id}. ${item.title}`}
                  </RegulationButton>
                ))
              ) : (
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                  검색 결과가 없습니다.
                </Typography>
              )}
            </Box>
          ) : (
            rmdRegulations.map((category) => (
              <Box key={category.category}>
                <Divider />
                <CategoryTitle variant="subtitle1">{category.category}</CategoryTitle>
                {category.items.map((item) => (
                  <RegulationButton
                    key={item.id}
                    variant="text"
                    fullWidth
                    onClick={() => handleRegulationClick(item)}
                    selected={selectedRegulation?.id === item.id}
                  >
                    {`${item.id}. ${item.title}`}
                  </RegulationButton>
                ))}
              </Box>
            ))
          )}
        </LeftSection>
        <RightSection ref={rightSectionRef}>
          <Box sx={{ paddingBottom: '20px', backgroundColor: '#fff' }}>
            {selectedRegulation ? (
              <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h5">
                    {`${selectedRegulation.title}`}
                  </Typography>
                  <Box>
                    <Button variant="contained" onClick={handlePrint} sx={{ marginRight: '10px' }}>
                      출력
                    </Button>
                  </Box>
                </Box>
                <Box ref={contentRef}>
                  {content}
                </Box>
              </Box>
            ) : (
              <Typography variant="h6">
                규정을 선택해주세요.
              </Typography>
            )}
          </Box>
        </RightSection>
      </Container>
    </PageWrapper>
  );
}

export default RMDStandardPage;

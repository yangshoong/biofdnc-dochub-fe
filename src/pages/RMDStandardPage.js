import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Divider, Button } from '@mui/material';
import rmdRegulations from '../data/rmdStandards';

const PageWrapper = styled(Box)({
  paddingTop: '100px',
  paddingLeft: '300px',
  minHeight: '60vh',
  backgroundColor: '#fff', // 배경색을 흰색으로 명시적 설정
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
  backgroundColor: '#fff', // Container의 배경색도 흰색으로 설정
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
  backgroundColor: '#fff', // 배경색을 흰색으로 명시적 설정
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

function RMDStandardPage() {
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [content, setContent] = useState(null);
  const rightSectionRef = useRef(null);
  const contentRef = useRef(null);  // 여기에 contentRef를 추가합니다.

  const handleRegulationClick = async (regulation) => {
    setSelectedRegulation({
      ...regulation,
      revisionNumber: '00', // 이 값은 실제 데이터에 따라 달라질 수 있습니다
      revisionDate: '2024.07.01' // 이 값은 실제 데이터에 따라 달라질 수 있습니다
    });
    try {
      const module = await import(`../data/${regulation.id}_Content`);
      setContent(<module.default />);
      if (rightSectionRef.current) {
        rightSectionRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error("콘텐츠 로딩 오류:", error);
      setContent(
        <Typography variant="body1">
          콘텐츠를 불러올 수 없습니다. ({regulation.id})
        </Typography>
      );
    }
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
              margin: 0mm 25mm; /* 좌우 여백만 유지 */
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
            /* 추가된 스타일 */
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
    
    printWindow.onload = function() {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <PageWrapper>
      <Container>
        <LeftSection>
          <Typography variant="h6" gutterBottom>
            원료제조팀 규정
          </Typography>
          {rmdRegulations.map((category) => (
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
          ))}
        </LeftSection>
        <RightSection ref={rightSectionRef}>
          <Box sx={{ paddingBottom: '20px', backgroundColor: '#fff' }}>
            {selectedRegulation ? (
              <Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Typography variant="h5">
                    {`${selectedRegulation.title}`}
                  </Typography>
                  <Button variant="contained" onClick={handlePrint}>
                    출력
                  </Button>
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

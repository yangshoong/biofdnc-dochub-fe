import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Divider, Button } from '@mui/material';
import rmdRegulations from '../data/rmdRegulations';

const PageWrapper = styled(Box)({
  paddingTop: '100px',
  paddingLeft: '300px',
  minHeight: '60vh',
});

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: theme.spacing(2),
  height: '95%', // 헤더 높이를 제외한 높이
  position: 'fixed',
  top: '150px',
  left: '200px',
  right: 0,
}));

const LeftSection = styled(Box)(({ theme }) => ({
  width: '35%',
  overflowY: 'auto',
  paddingRight: theme.spacing(2),
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
  paddingLeft: theme.spacing(2),
  marginRight: theme.spacing(5),
  height: '85%',
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

function RMDQualityPage() {
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [content, setContent] = useState(null);
  const rightSectionRef = useRef(null);

  const handleRegulationClick = async (regulation) => {
    setSelectedRegulation(regulation);
    try {
      const module = await import(`../data/${regulation.id}_Content`);
      setContent(<module.default />);
      // 콘텐츠가 로드된 후 스크롤을 최상단으로 이동
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
          <Box sx={{ paddingBottom: '20px' }}>
            {selectedRegulation ? (
              <Box>
                <Typography variant="h5" gutterBottom>
                  {`${selectedRegulation.id}. ${selectedRegulation.title}`}
                </Typography>
                {content}
              </Box>
            ) : (
              <Typography variant="h6">
                규정을 선택하면 내용이 표시됩니다.
              </Typography>
            )}
          </Box>
        </RightSection>
      </Container>
    </PageWrapper>
  );
}

export default RMDQualityPage;

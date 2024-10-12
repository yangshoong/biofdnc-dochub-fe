import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Divider, Button } from '@mui/material';
import rmdRegulations from '../data/rmdRegulations';

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

function RMDQualityPage() {
  const [selectedRegulation, setSelectedRegulation] = useState(null);
  const [content, setContent] = useState(null);
  const rightSectionRef = useRef(null);

  const handleRegulationClick = async (regulation) => {
    setSelectedRegulation(regulation);
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
          <Box sx={{ paddingBottom: '20px', backgroundColor: '#fff' }}> {/* 내부 Box에도 배경색 적용 */}
            {selectedRegulation ? (
              <Box>
                <Typography variant="h5" gutterBottom>
                  {`${selectedRegulation.title}`}
                </Typography>
                {content}
              </Box>
            ) : (
              <Typography variant="h6">
              </Typography>
            )}
          </Box>
        </RightSection>
      </Container>
    </PageWrapper>
  );
}

export default RMDQualityPage;

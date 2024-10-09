import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Divider, Button } from '@mui/material';
import rmdRegulations from '../data/rmdRegulations';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 'calc(100vh - 64px)', // 헤더 높이를 제외한 높이
  marginTop: '100px', // 헤더 높이만큼 마진 추가
  marginLeft: '300px', // 좌측 여백을 더 넓게
  padding: theme.spacing(2), // 전체적인 패딩 추가
  justifyContent: 'center', // 중앙 정렬
  alignItems: 'flex-start', // 상단 정렬
}));

const LeftSection = styled(Box)(({ theme }) => ({
  width: '35%', // 좌측 본문의 가로 폭을 줄임
  overflowY: 'auto',
  paddingRight: theme.spacing(2), // 우측 패딩 추가
  borderRight: `1px solid ${theme.palette.divider}`,
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
}));

const RightSection = styled(Box)(({ theme }) => ({
  width: '65%', // 우측 본문의 가로 폭을 늘림
  overflowY: 'auto',
  paddingLeft: theme.spacing(2), // 좌측 패딩 추가
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  'scrollbar-width': 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // 상단 정렬
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
  const [content, setContent] = useState('');

  const handleRegulationClick = async (regulation) => {
    setSelectedRegulation(regulation);
    if (regulation.id === 'BF-RMD-GM-01') {
      const module = await import('../data/BF-RMD-GM-01-content');
      setContent(module.default);
    } else {
      setContent(regulation.content);
    }
  };

  return (
    <Box>
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
        <RightSection>
          {selectedRegulation ? (
            <Box>
              <Typography variant="h5" gutterBottom>
                {`${selectedRegulation.id}. ${selectedRegulation.title}`}
              </Typography>
              <Typography variant="body1">
                {content}
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6">
              규정을 선택하면 내용이 표시됩니다.
            </Typography>
          )}
        </RightSection>
      </Container>
    </Box>
  );
}

export default RMDQualityPage;

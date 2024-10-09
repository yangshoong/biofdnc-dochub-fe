import React from 'react';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const theme = createTheme({
  // M3 테마 설정을 여기에 추가
});

const MainContainer = styled('div')({
  display: 'flex',
  height: '100vh',
});

const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  marginLeft: '80px', // Navbar의 너비만큼 여백 추가
  padding: theme.spacing(3),
}));

function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <Navbar />
        <Content>
          <Header />
          <h2>최근 메뉴</h2>
          {/* AP발주현황, 거래명세서작성, 거래명세표, 전자계약 등의 메뉴 항목 */}
          
          <h2>대시보드</h2>
          {/* 발주제품 대응현황, Help Desk(Q/A), To-Do List 등의 대시보드 항목 */}
        </Content>
      </MainContainer>
    </ThemeProvider>
  );
}

export default MainPage;

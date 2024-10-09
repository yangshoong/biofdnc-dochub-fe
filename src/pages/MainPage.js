import React from 'react';
import { styled } from '@mui/system';
import Header from '../components/Header';

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
    <MainContainer>
      <Content>
        <Header />
        <h2>최근 메뉴</h2>
        {/* ... */}
      </Content>
    </MainContainer>
  );
}

export default MainPage;

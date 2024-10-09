import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const HeaderContainer = styled('header')({
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  borderBottom: '1px solid #ccc',
});

const Logo = styled('div')({
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',
});

const UserInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: 'black',
});

const LogoutButton = styled(Button)({
  marginLeft: '10px',
});

function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>BIO-FD&C</Logo>
      <UserInfo>
        <span>{user ? `${user.name}님 환영합니다` : '로그인이 필요합니다'}</span>
        {user && (
          <LogoutButton variant="outlined" color="primary" onClick={handleLogout}>
            로그아웃
          </LogoutButton>
        )}
      </UserInfo>
    </HeaderContainer>
  );
}

export default Header;
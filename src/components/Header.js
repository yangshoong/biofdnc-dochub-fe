import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const HeaderContainer = styled('header')({
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  justifyContent: 'space-between', // space-between으로 변경
  alignItems: 'center',
  padding: '20px 20px',
  borderBottom: '1px solid #ccc',
});

const Logo = styled('div')({
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',
  marginLeft: 'auto', // 오른쪽으로 이동
  marginRight: '20px', 
});

// eslint-disable-next-line no-unused-vars
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
      {/* 다른 요소들 */}
    </HeaderContainer>
  );
}

export default Header;
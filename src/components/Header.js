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
      
    </HeaderContainer>
  );
}

export default Header;
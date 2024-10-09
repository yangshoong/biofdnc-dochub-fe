import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, InputBase, Paper, Avatar, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import useAuthStore from '../store/authStore'; // authStore import 추가

const NavRail = styled(Box)(({ theme }) => ({
  width: '80px',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
}));

const NavItem = styled(ListItemButton)(({ theme, active }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '16px',
  width: '64px',
  height: '56px',
  margin: theme.spacing(1, 0),
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 'auto',
    color: active ? theme.palette.primary.contrastText : 'inherit',
  },
}));

const SearchContainer = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  left: '80px',
  top: '0',
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: 400,
  zIndex: 1000,
}));

const UserInfo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const navItems = [
  { path: '/main', label: 'Home', icon: <HomeIcon /> },
  { path: '/ingredient', label: 'Ingredient', icon: <InventoryIcon /> },
  { path: '/product', label: 'Product', icon: <CategoryIcon /> },
  { path: '/record', label: 'Record', icon: <DescriptionIcon /> },
  { path: '/audit', label: 'Audit', icon: <AssignmentIcon /> },
  { path: '/user', label: 'User', icon: <PersonIcon /> },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuthStore();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/login');
  };

  return (
    <NavRail component="nav">
      <IconButton onClick={toggleSearch} sx={{ mb: 2 }}>
        <SearchIcon />
      </IconButton>
      {showSearch && (
        <SearchContainer>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색..."
            inputProps={{ 'aria-label': '검색' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchContainer>
      )}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavItem
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              active={location.pathname === item.path ? 1 : 0}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ variant: 'caption', align: 'center' }} />
            </NavItem>
          </ListItem>
        ))}
      </List>
      <UserInfo>
        <IconButton onClick={handleMenu}>
          <Avatar alt={user?.name} src={user?.avatar} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>프로필</MenuItem>
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </Menu>
      </UserInfo>
    </NavRail>
  );
}

export default Navbar;
import React, { useState, useRef } from 'react';
import { styled } from '@mui/system';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  InputBase,
  Paper,
  Avatar,
  Menu,
  MenuItem,
  Popper,
  Grow,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import useAuthStore from '../store/authStore';

const NavRail = styled(Box)(({ theme }) => ({
  width: '100px',
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

const navItems = [
  { path: '/main', label: 'Home', icon: <HomeIcon /> },
  { path: '/ingredient', label: 'Ingredient', icon: <InventoryIcon /> },
  { path: '/product', label: 'Product', icon: <CategoryIcon /> },
  { path: '/record', label: 'Record', icon: <DescriptionIcon />,
    subItems: [
      { path: '/record/hygiene', label: '위생관리' },
      { path: '/record/safety-check', label: '퇴실시안전점검' },
      { path: '/record/cleaning', label: '작업장청소' },
      { path: '/record/5s-checklist', label: '5S Check List' },
      { path: '/record/purified-water', label: '정제수' },
      { path: '/record/deviation', label: '일탈' },
      { path: '/record/nonconformance', label: '부적합' },
      { path: '/record/complaint', label: '클레임' },
      { path: '/record/change-management', label: '변경관리(4M)' },
      { path: '/record/vendor-evaluation', label: '거래처평가' },
    ],
  },
  {
    path: '/quality', label: 'Quality', icon: <AssignmentIcon />,
    subItems: [
      { path: '/quality/iso9001', label: 'ISO9001' },
      { path: '/quality/rmd-quality', label: '원료제조팀규정' },
    ],
  },
  { path: '/audit', label: 'Audit', icon: <AssignmentIcon />,
    subItems: [
      { path: '/audit/amorepacific', label: 'AMOREPACIFIC' },
      { path: '/audit/givaudan', label: 'GIVAUDAN' },
    ],
  },
  { path: '/user', label: 'User', icon: <PersonIcon /> },
];


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logout } = useAuthStore();
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (event, item) => {
    if (item.subItems) {
      clearTimeout(timeoutRef.current); // 기존 타임아웃 제거
      setAnchorEl(event.currentTarget);
      setOpenSubMenu(item.label);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubMenu(null);
      setAnchorEl(null);
    }, 500); // 타임아웃 시간을 늘림
  };

  const handleSubMenuEnter = () => {
    clearTimeout(timeoutRef.current); // 하위 메뉴가 열려 있도록 함
  };

  const handleSubMenuLeave = () => {
    setOpenSubMenu(null);
    setAnchorEl(null);
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
      <IconButton onClick={() => setShowSearch(!showSearch)} sx={{ mb: 2 }}>
        <SearchIcon />
      </IconButton>
      {showSearch && (
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 500, // 검색창 길이를 더 길게 수정
            position: 'absolute',
            left: '80px',
            top: '10px',
            zIndex: 1000,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색..."
            inputProps={{ 'aria-label': '검색' }}
          />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      )}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <NavItem
              component={Link}
              to={item.path}
              selected={location.pathname.startsWith(item.path)}
              active={location.pathname.startsWith(item.path) ? 1 : 0}
              onMouseEnter={(event) => handleMouseEnter(event, item)}
              onMouseLeave={handleMouseLeave}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ variant: 'caption', align: 'center' }}
              />
            </NavItem>
            {item.subItems && openSubMenu === item.label && (
              <Popper
                open={true}
                anchorEl={anchorEl}
                placement="right-start"
                transition
                disablePortal
                style={{ zIndex: 1000 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: 'left top' }}
                  >
                    <Paper
                      onMouseEnter={handleSubMenuEnter}
                      onMouseLeave={handleSubMenuLeave}
                      sx={{ mt: '-8px', ml: '4px', width: '200px' }}  // width 추가
                    >
                      <List dense>
                        {item.subItems.map((subItem) => (
                          <ListItemButton
                            key={subItem.path}
                            component={Link}
                            to={subItem.path}
                            selected={location.pathname === subItem.path}
                            sx={{ pl: 2, pr: 2 }}
                          >
                            <ListItemText primary={subItem.label} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            )}
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ mb: 4 }}>
        <IconButton onClick={handleMenu}>
          <Avatar alt={user?.username} src={user?.avatar} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && !openSubMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>프로필</MenuItem>
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </Menu>
      </Box>
    </NavRail>
  );
}

export default Navbar;
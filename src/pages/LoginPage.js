// 프론트엔드
// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  TextField, 
  Checkbox, 
  FormControlLabel, 
  Link, 
  Typography, 
  Container, 
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { styled } from '@mui/system';

// 이미지의 색상 계열에 맞춘 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2', // 로그인 버튼 색상
    },
    background: {
      default: '#FFFFFF', // 흰색 배경
    },
    text: {
      primary: '#333333', // 어두운 회색 텍스트
    },
  },
});

// 스타일된 컴포넌트
const LoginBox = styled(Box)(({ theme }) => ({
  width: '100%', // 너비를 100%로 설정
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
}));

function LoginPage() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // 로그인 로직을 추가하거나, 간단히 메인 페이지로 이동
    navigate('/main');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        component="main" 
        maxWidth="xs" 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          pt: 8, // 상단 패딩 추가
        }}
      >
        <LoginBox>
          <Typography component="h1" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            BIO-FD&C
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ color: 'text.secondary' }}>
            Ingredient Product Document Hub
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            name="id"
            autoComplete="id"
            autoFocus
            sx={{ bgcolor: '#F0F0F0' }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="PASSWORD"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ID저장"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <Link href="#" variant="body2">
              HELPDESK
            </Link>
          </Box>
          <Link href="#" variant="body2" sx={{ mt: 2 }}>
            아이디 / 비밀번호 찾기
          </Link>
        </LoginBox>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;

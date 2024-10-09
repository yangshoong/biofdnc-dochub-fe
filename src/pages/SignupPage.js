import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Link,
  Typography,
  Container,
  Box,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

const SignupBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
}));

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 회원가입 로직을 구현합니다.
    console.log('회원가입 데이터:', formData);
    // 회원가입 성공 후 로그인 페이지로 이동
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 8,
      }}>
        <SignupBox>
          <Typography component="h1" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            회원가입
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="사용자 이름"
              name="username"
              autoComplete="username"
              autoFocus
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="비밀번호 확인"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              가입하기
            </Button>
            <Link href="/" variant="body2">
              이미 계정이 있으신가요? 로그인
            </Link>
          </Box>
        </SignupBox>
      </Container>
    </ThemeProvider>
  );
}

export default SignupPage;
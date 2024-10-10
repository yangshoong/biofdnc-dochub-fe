// 프론트엔드
// src/pages/SignupPage.js

import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Link를 RouterLink로 별칭 지정
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  ThemeProvider,
  createTheme,
  Alert,
  Link as MuiLink, // MuiLink 추가
} from '@mui/material';
import { styled } from '@mui/system';

const API_URL = 'http://localhost:5000/api/auth/signup'; // 엔드포인트 업데이트

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

const SignupContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100vh - 100px)', // Adjust this value as needed
  paddingTop: '2rem', // Adjust this value as needed
  paddingBottom: '2rem', // Adjust this value as needed
  backgroundColor: 'white',
}));

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log(data.message);
        navigate('/login');
      } else if (response.status === 409) {
        setError('이미 사용 중인 이메일입니다.');
      } else {
        setError(data.message || '회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원가입 요청 중 오류 발생:', error);
      setError('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <SignupContainer>
        <SignupBox>
          <Typography component="h1" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            회원가입
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
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
            <Typography variant="body2">
              이미 계정이 있으신가요?{' '}
              <MuiLink component={RouterLink} to="/login">
                로그인
              </MuiLink>
            </Typography>
          </Box>
        </SignupBox>
      </SignupContainer>
    </ThemeProvider>
  );
}

export default SignupPage;

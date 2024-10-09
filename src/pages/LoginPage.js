// 프론트엔드
// src/pages/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 추가: API 호출을 위한 axios
import {
  Button,
  TextField,
  Link,
  Typography,
  Container,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
  createTheme,
  Alert // 추가: 에러 메시지를 위한 Alert 컴포넌트
} from '@mui/material';
import { styled } from '@mui/system';
import useAuthStore from '../store/authStore'; // 파일 상단에 추가

const theme = createTheme({
  palette: {
    primary: {
      main: '#005dab',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
    },
  },
});

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: 'white', // 여기를 'white'로 변경
}));

const LoginBox = styled(Box)(({ theme }) => ({
  width: '380px',
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  fontFamily: "'Arial', sans-serif",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  marginBottom: '30px',
  fontWeight: 'bold',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  margin: '15px 0',
  '& .MuiInputBase-input': {
    padding: '14px',
    fontSize: '16px',
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '14px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontSize: '18px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#003e7e',
  },
}));

const LinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  fontSize: '14px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const API_URL = 'http://localhost:5000/api/auth/login'; // 엔드포인트 업데이트

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보를 저장하는 상태 추가
  const [openDialog, setOpenDialog] = useState(false); // 다이얼로그 상태 추가
  const setUser = useAuthStore(state => state.setUser); // 추가

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // 에러 초기화
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL, {
        email,
        password
      });

      console.log('로그인 응답:', response.data);

      if (response.data && response.data.success) {
        // 'name' 대신 'username'을 사용
        const user = {
          ...response.data.user,
          name: response.data.user.username
        };
        setUser(user);
        setUserInfo(user);
        setOpenDialog(true);
      } else {
        setError(response.data.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      setError('로그인 요청 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirm = () => {
    setOpenDialog(false);
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <ThemeProvider theme={theme}>
      <LoginContainer>
        <LoginBox>
          <Title variant="h5">
            BIO-FD&C
          </Title>
          <Typography variant="subtitle2" gutterBottom>
            Ingredient Product Document Hub
          </Typography>
          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          <Box component="form" onSubmit={handleLogin}>
            <StyledTextField
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <StyledTextField
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </LoginButton>
          </Box>
          <LinksBox>
            <StyledLink href="/signup">
              회원가입
            </StyledLink>
            <StyledLink href="#">
              아이디 / 비밀번호 찾기
            </StyledLink>
          </LinksBox>
        </LoginBox>

        {/* 로그인 성공 후 사용자 정보 표시 다이얼로그 */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>로그인 성공</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {userInfo && `${userInfo.username || userInfo.name}님, 환영합니다!`}
            </DialogContentText>
            <DialogContentText>
              이메일: {userInfo && userInfo.email}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirm} color="primary" autoFocus>
              메인페이지로 이동
            </Button>
          </DialogActions>
        </Dialog>
      </LoginContainer>
    </ThemeProvider>
  );
}

export default LoginPage;

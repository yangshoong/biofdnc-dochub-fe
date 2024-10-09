// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/LoginPage'; // 여기를 수정
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import useAuthStore from './store/authStore';
import SignupPage from './pages/SignupPage'; // 이 줄을 추가
import theme from './theme';

function App() {
  const user = useAuthStore(state => state.user);
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignupPage />} /> // 이 줄을 추가
          <Route path="/" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          } />
          {/* 다른 보호된 라우트들... */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
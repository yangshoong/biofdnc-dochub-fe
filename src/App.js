// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import useAuthStore from './store/authStore';
import SignupPage from './pages/SignupPage';
import RMDStandardPage from './pages/RMDStandardPage';
import Header from './components/Header'; // Header 컴포넌트 추가
import theme from './theme';
import AmorepacificAudit from './pages/AmorepacificAudit';

function App() {
  const user = useAuthStore(state => state.user);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header /> {/* 모든 페이지에 공통으로 헤더 추가 */}
        {user && <Navbar />}
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignupPage />} />
          <Route path="/" element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          } />
          
          <Route path="/standard/rmd-standard" element={
            <PrivateRoute>
              <RMDStandardPage />
            </PrivateRoute>
          } />
          <Route path="/audit/amorepacific" element={
            <PrivateRoute>
              <AmorepacificAudit />
            </PrivateRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// 프론트엔드
// src/pages/LoginPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직을 추가하거나, 간단히 메인 페이지로 이동
    navigate('/main');  // 로그인 버튼 클릭 시 메인 페이지로 이동
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>BIO-FD&C Product Document Hub</h1>
        <input type="text" placeholder="ID" className="input-field" />
        <input type="password" placeholder="PASSWORD" className="input-field" />
        <div className="options">
          <label>
            <input type="checkbox" /> ID 저장
          </label>
        </div>
        <button className="login-button" onClick={handleLogin}>로그인</button>
        <div className="links">
          <a href="#">아이디 / 비밀번호 찾기</a>
          <a href="#">HELPDESK</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

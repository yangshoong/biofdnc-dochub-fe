import React from 'react';
import './LoginPage.css';

function LoginPage() {
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
        <button className="login-button">로그인</button>
        <div className="links">
          <a href="#">아이디 / 비밀번호 찾기</a>
          <a href="#">HELPDESK</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

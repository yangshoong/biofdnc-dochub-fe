// 프론트엔드
// src/pages/MainPage.js

import React from 'react';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-container">
      {/* 최상단 로고 및 로그인 정보 */}
      <header className="header">
        <div className="logo">BIO-FD&C</div>
        <div className="user-info">
          <span>홍길동님 환영합니다</span>
        </div>
      </header>

      {/* 네비게이션 바 */}
      <nav className="navbar">
        <ul>
          <li>MainPage</li>
          <li>Ingredient</li>
          <li>Product</li>
          <li>Record</li>
          <li>Audit</li>
          <li>User</li>
        </ul>
      </nav>

      {/* 최근 선택한 메뉴 */}
      <section className="recent-menu">
          <div className="menu-tab">
          <span>AP발주현황</span>
          <span>거래명세서작성</span>
          <span>거래명세표</span>
          <span>전자계약</span>
        </div>
      </section>

      {/* 대시보드 */}
      <section className="dashboard">
        <div className="dashboard-item">
          <h3>발주제품 대응현황</h3>
          {/* 차트 및 표 추가 */}
        </div>
        <div className="dashboard-item">
          <h3>Help Desk(Q/A)</h3>
          {/* Help Desk 표 추가 */}
        </div>
        <div className="dashboard-item">
          <h3>To-Do List</h3>
          {/* To-Do List 추가 */}
        </div>
      </section>

      {/* 풋터 */}
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default MainPage;

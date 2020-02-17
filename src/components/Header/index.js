import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-link">
          Главная
        </Link>
        <p className="header-title">
          Портал архитекторов Беларуси
        </p>
        <Link to="/commonpage" className="header-link">
          Архитекторы
        </Link>
      </div>
    </header>
  );
}

export default Header;

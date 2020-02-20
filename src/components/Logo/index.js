import React from 'react';
import './index.css';
import LogoImage from '../../../static/img/logo.svg';

const Logo = () => (
  <h1 className="main-logo">
    <a href="/" title="Culture portal" className="d-inline-block main-logo--link">
      <img className="d-inline-block" src={LogoImage} alt="Culture portal" />
      <span className="d-inline-block pt-2 pt-md-0 main-logo--description">
        Архитекторы Беларуси
      </span>
    </a>
  </h1>

);

export default Logo;

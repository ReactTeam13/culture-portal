import React from 'react';
import './index.css';
import { Link } from 'gatsby';
import LogoImage from '../../../static/img/logo.svg';

const Logo = () => (
  <h1 className="main-logo">
    <Link to="/" title="Culture portal" className="d-inline-block main-logo--link">
      <img className="d-inline-block" src={LogoImage} alt="Culture portal" />
      <span className="d-inline-block px-2 pt-2 pt-md-0 main-logo--description">
        Архитекторы Беларуси
      </span>
    </Link>
  </h1>

);

export default Logo;

import React from 'react';
import { Link } from 'gatsby';

import Logo from '../Logo';
import LanguageControl from '../LanguageControl';
import { languages } from '../../translations';

import './index.css';


function Header() {
  return (
    <header className="py-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 order-1 text-center mb-5 col-md order-md-1 mb-md-0 text-md-left logo-wrapper">
          <Logo />
        </div>

        <nav className="col-12 order-3 text-center mb-4 col-md order-md-2 mb-md-0 navigation">
          <div className="d-block p-4 d-md-inline-block w-50 text-center">
            <Link to="/" className="navigation-link">
              Главная
            </Link>
          </div>
          <div className="d-block p-4 d-md-inline-block w-50 text-center">
            <Link to="/architectors" className="navigation-link">
              Архитекторы
            </Link>
          </div>
        </nav>

        <div className="col-12 order-2 text-center mb-4 col-md order-md-3 mb-md-0 text-md-right language-switcher-wrapper">
          <LanguageControl languages={languages} />
        </div>
      </div>
    </header>
  );
}

export default Header;

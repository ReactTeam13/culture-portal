import React from 'react';
import { Link } from 'gatsby';
import Logo from '../Logo';

import './index.css';


function Header() {
  return (
    <header className="container py-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 order-1 text-center mb-4 col-md order-md-1 mb-md-0 text-center">
          <Logo />
        </div>

        <nav className="col-12 order-3 text-center mb-4 col-md order-md-2 mb-md-0 text-center">
          <Link to="/" className="p-4 d-block p-md-2 d-md-inline-block navigation-link">
            Главная
          </Link>
          <Link to="/architectors" className="p-4 d-block p-md-2 d-md-inline-block navigation-link">
            Архитекторы
          </Link>
        </nav>

        <div className="col-12 order-2 text-center mb-4 col-md order-md-3 mb-md-0">
          {/*  Place buttons here, once is will be ready */}
          <div>
            <button>111</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

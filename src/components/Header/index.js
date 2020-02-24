import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Logo from '../Logo';
import LanguageControl from '../LanguageControl';
import { languages } from '../../translations';

import './index.css';


function Header() {
  const { t } = useTranslation('header');
  return (
    <header className="container py-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-12 order-1 text-center mb-5 col-md order-md-1 mb-md-0 text-md-left logo-wrapper">
          <Logo title={t('title')} />
        </div>

        <nav className="col-12 order-3 text-center mb-4 col-md order-md-2 mb-md-0 navigation">
          <div className="d-block p-4 d-md-inline-block text-center navigation-link-wrapper">
            <Link to="/" className="navigation-link">
              {t('mainLink')}
            </Link>
          </div>
          <div className="d-block p-4 d-md-inline-block text-center navigation-link-wrapper">
            <Link to="/architectors" className="navigation-link">
              {t('link')}
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

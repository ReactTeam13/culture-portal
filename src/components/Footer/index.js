import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.css';
import FooterNav from './FooterNav/index';
import FooterDesctiption from './FooterDescription/index';
import FooterBottom from './FooterBottom/index';

function Footer() {
  const { t } = useTranslation('footer');
  return (
    <footer>
      <div className="bg-gray">
        <div className=" container">
          <div className=" row">
            <div className="col-lg-4 col-md-5 col-sm-12">
              <FooterNav links={t('links', { returnObjects: true })} />
            </div>
            <div className="col-6 d-none d-lg-block d-md-block">
              <FooterDesctiption description={t('description', { returnObjects: true })} />
            </div>
            <div className="col" />
          </div>
        </div>
        <div className="w-100"><FooterBottom title={t('title')} /></div>
      </div>
    </footer>
  );
}

export default Footer;

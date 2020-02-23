import React from 'react';
import './index.css';
import FooterNav from './FooterNav/index';
import FooterDesctiption from './FooterDescription/index';
import FooterBottom from './FooterBottom/index';
import t from '../../translations/ru';

function Footer() {
  return (
    <footer>
      <div className="bg-gray">
        <div className=" container">
          <div className=" row">

            <div className="col-lg-4 col-md-5 col-sm-12"><FooterNav t={t} /></div>
            <div className="col-6 d-none d-lg-block d-md-block"><FooterDesctiption t={t} /></div>
            <div className="col" />
          </div>
        </div>
        <div className="w-100"><FooterBottom t={t} /></div>
      </div>
    </footer>
  );
}

export default Footer;

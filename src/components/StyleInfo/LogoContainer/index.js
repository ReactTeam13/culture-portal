import React from 'react';
import Logo from '../../Logo';
import './index.css';


function LogoContainer() {
  return (
    <div className="logo-container pb-5 pt-5">
      <h2 className="h2 ohra text-center pb-4">Site Logo</h2>
      <div className="logo-items p-5 col-12 order-1 text-center mb-5 col-md order-md-1 mb-md-0 text-md-left">
        <Logo title="Architects Of Belarus" />
      </div>
    </div>
  );
}

export default LogoContainer;

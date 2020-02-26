import React from 'react';
import './index.css';
import LogoContainer from './LogoContainer';
import ColorsContainer from './Colors';
import TypographyContainer from './Typography';

function StyleBlock() {
  return (
    <div>
      <LogoContainer />
      <ColorsContainer />
      <TypographyContainer />
    </div>
  );
}

export default StyleBlock;

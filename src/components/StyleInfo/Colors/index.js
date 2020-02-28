import React from 'react';
import './index.css';
import Color from './Color';


function ColorsContainer() {
  return (
    <div className="p-5 container">
      <h2 className="h2 ohra text-center pb-4">Color palette</h2>
      <div className="colors-container pb-2">
        <Color color="#41414E" size="80px" />
        <Color color="#5B5B65" size="80px" />
        <Color color="#C4C4C4" size="80px" />
        <Color color="#E5E5E5" size="80px" />
        <Color color="#F5F4F2" size="80px" />
        <Color color="#C3A871" size="80px" />
        <Color color="#D7B87B" size="80px" />
      </div>
    </div>
  );
}

export default ColorsContainer;

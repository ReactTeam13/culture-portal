import React from 'react';
import './index.css';

function LinkIcon({ src, icon }) {
  return (
    <div className="d-inline">
      <a
        href={src}
      >
        <img className="icon" src={icon} alt="icon" />
      </a>
    </div>
  );
}

export default LinkIcon;

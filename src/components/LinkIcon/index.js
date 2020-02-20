import React from 'react';
import './index.css';

function LinkIcon({ src, icon }) {
  return (
    <div>
      <a
        href={src}
      >
        <img className="icon" src={icon} alt="icon" />
      </a>
    </div>
  );
}

export default LinkIcon;

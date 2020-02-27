import React from 'react';
import './index.css';

function FooterDescription({ description }) {
  return (
    <div className="pt-5 text-black">
      <p>
        {description[0]}
        <span className="ohra">{description[1]}</span>
        {description[2]}
      </p>
    </div>
  );
}

export default FooterDescription;

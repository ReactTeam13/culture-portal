import React from 'react';
import './index.css';

function FooterDescription({ t }) {
  return (
    <div className="p-5 text-black">
      <p>
        {t.footer.description[0]}
        <span className="ohra">{t.footer.description[1]}</span>
        {t.footer.description[2]}
      </p>
    </div>
  );
}

export default FooterDescription;

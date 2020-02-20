import React from 'react';
import './index.css';

function FooterDescription({ t }) {
  return (
    <div className="p-5 text-black">
      <p>{t.footer.description}</p>
    </div>
  );
}

export default FooterDescription;

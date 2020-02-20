import React from 'react';
import './index.css';

function FooterDescription({ t }) {
  return (
    <div className="p-5">
      <p>{t.footer.description}</p>
    </div>
  );
}

export default FooterDescription;

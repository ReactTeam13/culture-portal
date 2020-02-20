import React from 'react';
import './index.css';

function FooterBottom({ t }) {
  return (
    <div className="bg-deep-gray p-4 text-center">{t.footer.title}</div>
  );
}

export default FooterBottom;

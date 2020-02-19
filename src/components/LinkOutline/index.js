import React from 'react';
import './index.css';

function LinkOutline({ src, children }) {
  return (
    <div className="section__item">
      <a
        className="p-2 text-secondary sm-link sm-link_padding-all sm-link1"
        href={src}
      >
        {children}
        <span className="sm-link__label" />
      </a>

    </div>
  );
}

export default LinkOutline;

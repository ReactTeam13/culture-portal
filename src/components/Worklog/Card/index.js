import React from 'react';
import './index.css';

function Card({ src, title, p }) {
  return (
    <div style={{ height: '100%' }} className="pt-5 pb-5 pr-4 pl-4 bg-light-gray text-center">
      <div>
        <img style={{ width: '120px' }} className="mb-4" src={src} alt={title} />
      </div>
      <h6 className="font-weight-bold m-2 ohra mb-3">
        {title}
      </h6>
      <p>
        {p}
      </p>
    </div>
  );
}

export default Card;

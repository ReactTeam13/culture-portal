import React from 'react';
import './index.css';

import Card from '../Card/index';

function Difficulties({ data }) {
  return (
    <div className="container">
      <div className="row">
        {
            data.map((item, i) => (
              <div key={i} className="col p-3">
                <Card src={item.icon} title={item.title} p={item.description} />
              </div>
            ))
          }
      </div>
    </div>

  );
}

export default Difficulties;

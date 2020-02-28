import React from 'react';
import './index.css';


function Title({ text }) {
  return (
    <div className="text-center">
      <h2 className="h3 pt-4 pb-4 ohra">
        {text}
      </h2>
    </div>
  );
}

export default Title;

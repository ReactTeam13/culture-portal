import React from 'react';
import './index.css';


function Checkbox({ isChecked }) {
  return (
    <input className="m-2" type="checkbox" defaultChecked={isChecked} />
  );
}

export default Checkbox;

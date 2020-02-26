import React from 'react';

function Color({ color, size }) {
  const divStyle = {
    backgroundColor: `${color}`,
    height: `${size}`,
    width: `${size}`,
  };
  return (
    <div className="p-3">
      <div className="color mb-3 rounded-circle" style={divStyle} />
      <span className="text-center">{color}</span>
    </div>
  );
}

export default Color;

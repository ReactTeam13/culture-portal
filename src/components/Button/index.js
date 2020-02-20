import React from 'react';
import './index.css';

const Button = ({
  type, content, onClickCallback, isDisabled,
}) => (
  <button
    className="btn"
    type={type || 'button'}
    disabled={isDisabled}
    onClick={onClickCallback}
  >
    {content}
  </button>
);

export default Button;

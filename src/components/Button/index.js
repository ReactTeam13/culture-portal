import React from 'react';
import './index.css';

const Button = ({
  type, content, onClickCallback, isDisabled,
}) => (
  <button
    className="btn btn-xxl btn-yellow"
    type={type || 'button'}
    disabled={isDisabled}
    onClick={onClickCallback}
  >
    {content}
  </button>
);

export default Button;

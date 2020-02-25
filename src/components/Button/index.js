import React from 'react';
import './index.css';

const Button = ({
  type, content, onClickCallback, isDisabled, id, btnAdditionalClasses,
}) => (
  <button
    className={`btn ${btnAdditionalClasses}`}
    type={type || 'button'}
    disabled={isDisabled}
    onClick={onClickCallback}
    id={id}
  >
    {content}
  </button>
);

export default Button;

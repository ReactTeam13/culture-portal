import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

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

Button.defaultProps = {
  type: 'button',
  content: 'press',
  isDisabled: false,
  onClickCallback: null,
};

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClickCallback: PropTypes.func,
};

export default Button;

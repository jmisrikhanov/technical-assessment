import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ disabled=false, content, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.btn}`}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
};
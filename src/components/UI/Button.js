import React from 'react';
import './Button.css';

const Button = ({ textOnly, onClick, children, ...rest }) => {
  const buttonClass = textOnly ? 'text-button' : 'button';

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
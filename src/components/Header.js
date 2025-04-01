import React from 'react';
import Button from './UI/Button';
import logo from '../assets/logo.jpg';

const Header = () => {
  const handleCartClick = () => {
    console.log('Cart button clicked');
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>React Food Order App</h1>
      </div>
      <Button textOnly={true} onClick={handleCartClick} className="cart-button">
        Cart (0)
      </Button>
    </header>
  );
};

export default Header;
import React, { useContext } from 'react'; 
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import logo from '../assets/logo.jpg';

const Header = () => {
  const cartCtx = useContext(CartContext); 

  const totalItems = cartCtx.items.reduce((total, item) => {
    return total + (item.quantity || 0); 
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>React Food Order App</h1>
      </div>
      <Button textOnly={true} className="cart-button">
        Cart ({totalItems}) 
      </Button>
    </header>
  );
};

export default Header;
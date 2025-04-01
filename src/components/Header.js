import React, { useContext } from 'react'; 
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import logo from '../assets/logo.jpg';

const Header = () => {
  const cartCtx = useContext(CartContext); 

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>React Food Order App</h1>
      </div>
      <Button textOnly={true} className="cart-button">
        Cart ({cartCtx.items.length}) 
      </Button>
    </header>
  );
};

export default Header;
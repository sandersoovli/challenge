import React, { useContext, useState } from 'react'; 
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import logo from '../assets/logo.jpg';
import CartModal from './CartModal';

const Header = () => {
  const cartCtx = useContext(CartContext); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  const openModalHandler = () => {
    setIsModalOpen(true); 
  };

  const closeModalHandler = () => {
    setIsModalOpen(false); 
  };

  return (
    <>
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Food Order App Logo" />
        <h1>React Food Order App</h1>
      </div>
      <Button textOnly={true} className="cart-button" onClick={openModalHandler}>
        Cart ({totalItems}) 
      </Button>
    </header>
    {isModalOpen && <CartModal onClose={closeModalHandler} items={cartCtx.items} />}
    </>
  );
};

export default Header;
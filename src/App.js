import React from 'react';
import { CartProvider } from './store/CartContext.js';
import Header from './components/Header.js';
import Meals from './components/Meals.js';

const App = () => {
 return (
    
    <CartProvider>
      <Header />
      <Meals />
    </CartProvider>
    
  );
};

export default App;

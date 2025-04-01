import React from 'react';
import Button from './UI/Button';

const MealItem = ({ name, description, price, image }) => {
  const formattedPrice = new Intl.NumberFormat('et-EE', {  
    style: 'currency', 
    currency: 'EUR' 
  }).format(price);

  const handleAddToCart = () => {
    console.log(`${name} added to cart`);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={require(`../assets/${image}`)} alt={name}/>
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p>
          <Button onClick={handleAddToCart}>Add to Cart</Button> {/* Kasutame Button komponenti */}
        </p>
      </article>
    </li>
  );
};

export default MealItem;
import React from 'react';

const MealItem = ({ name, description, price, image }) => {
  
  const formattedPrice = new Intl.NumberFormat('et-EE', {  
    style: 'currency', 
    currency: 'EUR' 
  }).format(price);

  return (
    <li className="meal-item">
      <article>
        <img src={`/images/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{formattedPrice}</p> {/* Kasutame formattedPrice */}
          <p className="meal-item-description">{description}</p>
        </div>
        <p>
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
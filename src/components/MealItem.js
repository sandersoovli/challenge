import React from 'react';

const MealItem = ({ name, description, price, image }) => {
  return (
    <li className="meal-item">
      <article>
      <img src={`/images/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
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
import React, { useRef, useEffect } from 'react';
import './CartModal.css';

const CartModal = ({ onClose, items }) => {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      dialog.showModal();
    }

    return () => {
      if (dialog) {
        dialog.close();
      }
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="cart-modal">
      <h2>Your Cart</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} - €{item.price.toFixed(2)}
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      <div className="cart-modal-actions">
        <button onClick={onClose}>Close</button>
      </div>
    </dialog>
  );
};

export default CartModal;
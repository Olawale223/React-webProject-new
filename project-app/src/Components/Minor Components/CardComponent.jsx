import React from 'react';
import './CardComponent.css';
import { toast } from 'react-toastify';


function CardComponent({ image, textHead, textFoot, onClick, onAddToCart }) {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart();
      toast.success(`${textHead} added to cart!`, { position: 'top-right', autoClose: 2000 });
    }
  };
  return (
    <div className="card">
      <div className='card-image' onClick={onClick}>
      <img src={image} alt={textHead} />
      </div>
      <div className="card-content">
        <h3>{textHead}</h3>
        <p>{textFoot}</p>
        {onAddToCart && (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}


export default CardComponent;

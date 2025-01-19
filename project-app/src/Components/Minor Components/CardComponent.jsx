import React from 'react';
import image1 from '../../Assets/FoodCourt/image1.jpeg';
import './CardComponent.css';
function CardComponent() {
  return (
    <>
      <div className="card">
          <div className="card-image">
          <img src={image1} alt="Food Court Icon" />
          </div>
          <span></span>
          <div className="text-content">
            <p className="text-head">Sunny Side Club</p>
            <p className="text-foot">Good food to start your day right!</p>
          </div>
      </div>
    </>
  );
}

export default CardComponent;

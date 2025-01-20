import React from 'react';
import './CardComponent.css';
import textContent from '../Constants';

const CardComponent = ({image = "", textContent = []}) =>{
  return (
    <>
      <div className="card">
          <div className="card-image">
          <img src={image} alt="Food Court Icon" />
          </div>
          <span></span>
          <div className="text-content">
            <p className="text-head">{textContent}</p>
            <p className="text-foot">{textContent}</p>
          </div>
      </div>
    </>
  );
}

export default CardComponent;

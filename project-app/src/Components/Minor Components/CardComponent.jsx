import React from 'react';
import './CardComponent.css';


const CardComponent = ({image = ""}) =>{
  return (
    <>
      <div className="card">
          <div className="card-image">
          <img src={image} alt="Food Court Icon" />
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

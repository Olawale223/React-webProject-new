import React from 'react';
import './CardComponent.css';


function CardComponent({ image, textHead, textFoot, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className='card-image'>
      <img src={image} alt={textHead} />
      </div>
      <div className="card-content">
        <h3>{textHead}</h3>
        <p>{textFoot}</p>
      </div>
    </div>
  );
}


export default CardComponent;

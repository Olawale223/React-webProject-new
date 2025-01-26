import React from 'react'
import './CardComponent.css';


export default function ProductCard({ image, textHead, textBody, textFoot }) {
  return (
    <div className="Product-card">
      <div className='Productcard-image'>
      <img src={image} alt={textHead} />
      </div>
      <div className="card-content">
        <h3>{textHead}</h3>
        <h3>{textBody}</h3>
        <p>{textFoot}</p>

      </div>
    </div>
  )
}

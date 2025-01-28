import React from 'react'
import './CardComponent.css'
import phonee from '../../Assets/FoodCourt/phonee.png';
import play from '../../Assets/FoodCourt/play.svg';
import apple from '../../Assets/FoodCourt/apple.svg';

export default function FloatingImage() {
  return (
    <div className="floating-cont">
      <div className="fl-text-cont">
        <h1>Hungry?</h1>
        <p>Order now!</p>
        <div className="fl-img">
          <a href="#" className="store-btn">
            <img src={apple} alt="Download on the App Store" className="app-store" />
            <div>Download on the App Store</div>
          </a>
          <a href="#" className="store-btn">
            <img src={play} alt="Get it on Google Play" className="play-store" />
            <div>Get it on Google Play</div>
          </a>
        </div>
      </div>
      <div className="fl-img-cont">
        <img
          src={phonee}
          alt="Mobile app interface preview"
          // className="phone-mockup"
        />
      </div>
    </div>
  )
}


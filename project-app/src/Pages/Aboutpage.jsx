import React from 'react'
import  '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import foodcourt from '../Assets/FoodCourt/foodcourt.mp4';

 function Aboutpage() {
  return (
    <>
    <Navbar/>


    <div className="about-container">
      <header className="hero-section">
        <h1>Creating the Future of Food Delivery Worldwide</h1>
        <div className="hero-video-container">
          <video autoPlay muted loop src={foodcourt} width={800} height={400} className='hero-image' />
        </div>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At FoodCourt, we strive to revolutionize food delivery by bringing quality, safety, and sustainability. We are
          committed to creating lasting connections between restaurants, delivery partners, and customers while ensuring
          the best possible experience for all.
        </p>
      </section>

      <section className="journey-section">
        <h2>The FoodCourt Journey</h2>
        <div className="journey-grid">
          <div className="journey-item">
            <image src="" alt="Various food items" width={300} height={200} className="journey-image" />
            <h3>Origins</h3>
            <p>Best flavors. Begin here.</p>
          </div>
          <div className="journey-item">
             <image
              src=""
              alt="Delivery operations"
              width={300}
              height={200}
              className="journey-image"
            /> 
            <h3>Operations</h3>
            <p>Seamless food experience.</p>
          </div>
          <div className="journey-item">
            <image src="" alt="Food delivery" width={300} height={200} className="journey-image" />
            <h3>Delivering Excellence</h3>
            <p>Quality at your doorstep.</p>
          </div>
          <div className="journey-item">
            <image src="" alt="Happy customers" width={300} height={200} className="journey-image" />
            <h3>Satisfied Guests</h3>
            <p>Smiles with every delivery.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Good Food, Good People</h2>
        <div className="team-grid">
            <div>
              
              <h3>Team Member</h3>
              <p>Position</p>
            </div>
          
        </div>
      </section>
    </div>

    <Footer/>
    </>
  )
}

export default Aboutpage

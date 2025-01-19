import React from 'react';
import ResturantCard from '../Components/ResturantCard';
import  '../App.css';

function Homepage() {
  return (
    
    <div className="Homepage-container">
      <h1>Meet the Restaurants</h1>
      <h4>Handpicked selection of top on-demand delivery restaurants.</h4>
      <div className="cardbody">
       <ResturantCard />
      </div>
    </div>
  );
}

export default Homepage;

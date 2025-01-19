import React from 'react';
import ResturantCard from '../Components/ResturantCard';
function Homepage() {
  return (
    <div>
      <h1>Meet the Restaurants</h1>
      <h4>Handpicked selection of top on-demand delivery restaurants.</h4>
      <div className="card">
       <ResturantCard />
      </div>
    </div>
  );
}

export default Homepage;

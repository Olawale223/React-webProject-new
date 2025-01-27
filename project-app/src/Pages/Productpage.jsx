import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Product from '../Components/Product';
import  '../App.css';

export default function Productpage() {
  return (
 <>
<Navbar/>
  <div className="Homepage-container">
    <h2>Get mouth-watering dishes </h2>
    <h2>from Sunny Side Club.</h2>
    <div className="cardbody">
    <Product/>
    </div>
</div>
<Footer/>
</>
  )
}

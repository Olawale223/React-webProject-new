import React from 'react'
import Layoutone from '../Layout/Layoutone'
import image1 from '../Assets/FoodCourt/image1.jpeg';
import image3 from '../Assets/FoodCourt/image3.jpeg';
import image7 from '../Assets/FoodCourt/image7.jpeg';
import image2 from '../Assets/FoodCourt/image2.jpeg';
import image5 from '../Assets/FoodCourt/image5.jpg';
import image6 from '../Assets/FoodCourt/image6.jpeg';
import image8 from '../Assets/FoodCourt/image8.jpeg';
import image9 from '../Assets/FoodCourt/image9.jpg';
import image11 from '../Assets/FoodCourt/image11.jpg';


import CardComponent from './Minor Components/CardComponent'

function ResturantCard() {
  return (
    <Layoutone>
        <CardComponent image={image1}/>
        <CardComponent image={image2}/>
        <CardComponent image={image3}/>
        <CardComponent image={image7}/>
        <CardComponent image={image5}/>
        <CardComponent image={image6}/>
        <CardComponent image={image8}/>
        <CardComponent image={image9}/>
        <CardComponent image={image11}/>
    </Layoutone>
  )
}

export default ResturantCard

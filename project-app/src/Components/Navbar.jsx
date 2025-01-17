import React from 'react'
import './Navbar.css'
import fc2 from '../Assets/FoodCourt/fc2.png';
import ap1 from '../Assets/FoodCourt/ap1.png';
import ps from '../Assets/FoodCourt/ps.png';


export default function Navbar() {
  return (
    <>
    
        <nav className='nav'>
            <navcontainer className="navcont">
                <div className="logo">
                <img src={fc2} alt="Icon 1" /> 
                </div>

                {/* <div className="icon">
                    <span className="toggle">☰</span>
                </div> */}

                <div className="menu">
                    <ul className="list-item">
                        <li><a href="#">AboutFC</a></li>
                        <li><a href="#">Restaurants</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="icons">
                    <div className='icone'><img src={ap1} alt="Icon 1" /> </div>
                    <div className='icone'> <img src={ps} alt="Icon 1" /> </div>
                
                </div>
            </navcontainer>
        </nav>
    
    </>
  )
}

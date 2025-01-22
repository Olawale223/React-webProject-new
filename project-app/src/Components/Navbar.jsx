import React from 'react'
import './Navbar.css'
import fc2 from '../Assets/FoodCourt/fc2.png';
import ap1 from '../Assets/FoodCourt/ap1.png';
import ps from '../Assets/FoodCourt/ps.png';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    
        <nav className='nav'>
            <div className="navcont">
                <div className="logo">
                <img src={fc2} alt="Icon 1" /> 
                </div>

                <div className="menu">
                    <ul className="list-item">
                       <Link to ="/about" style={{ textDecoration: 'none' }}><li><a>AboutFC</a></li></Link>
                       <Link to ="/" style={{ textDecoration: 'none' }}><li><a>Restaurant</a></li></Link>
                       <Link to ="/" style={{ textDecoration: 'none' }}><li><a>Careers</a></li></Link>
                       <Link to ="/" style={{ textDecoration: 'none' }}><li><a>FAQs</a></li></Link>
                        
                    </ul>
                </div>

                <div className="icons">
                    <div className='icone'><img src={ap1} alt="Icon 1" /><Link to="/about"/></div>
                
                </div>
            </div>
        </nav>
    
    </>
  )
}

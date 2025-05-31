import React from 'react'
import './Navbar.css'
import fc2 from '../Assets/FoodCourt/fc2.png';
import user from '../Assets/FoodCourt/user.svg';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    
        <nav className='nav'>
            <div className="navcont">
                <div className="logo">
                 <Link to ="/" style={{ textDecoration: 'none' }}>
                    <img src={fc2} alt="Icon 1" /> 
                </Link>
                </div>

                <div className="menu">
                    <ul className="list-item">
                       <Link to ="/about" style={{ textDecoration: 'none' }}><li>AboutFC</li></Link>
                       <Link to ="/resturant" style={{ textDecoration: 'none' }}><li>Restaurant</li></Link>
                       <Link to ="/careers" style={{ textDecoration: 'none' }}><li>Careers</li></Link>
                       <Link to ="/faqs" style={{ textDecoration: 'none' }}><li>FAQs</li></Link>
                        
                    </ul>
                </div>

                <div className="icons">
                    <div className='icone'><Link to ="/access" style={{ textDecoration: 'none' }}><img src={user} alt="Icon 1" /></Link></div>
                
                </div>
            </div>
        </nav>
    
    </>
  )
}

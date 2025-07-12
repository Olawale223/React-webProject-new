import React, { useState } from 'react';
import './Navbar.css';
import fc2 from '../Assets/FoodCourt/fc2.png';
import user from '../Assets/FoodCourt/user.svg';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='nav'>
      <div className="navcont">

        {/* Left: Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={fc2} alt="Logo" />
          </Link>
        </div>

        {/* Center: Menu Links (visible on desktop, collapsible on mobile) */}
        <div className={`menu ${menuOpen ? 'show' : ''}`}>
          <ul className="list-item">
            <Link to="/about" style={{ textDecoration: 'none' }}><li>AboutFC</li></Link>
            <Link to="/resturant" style={{ textDecoration: 'none' }}><li>Restaurant</li></Link>
            <Link to="/careers" style={{ textDecoration: 'none' }}><li>Careers</li></Link>
            <Link to="/faqs" style={{ textDecoration: 'none' }}><li>FAQs</li></Link>
          </ul>
        </div>

        {/* Right: Hamburger + User icon */}
        <div className="nav-right">
          <div className="hamburger-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className="icons">
            <Link to="/access" style={{ textDecoration: 'none' }}>
              <img src={user} alt="User Icon" />
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

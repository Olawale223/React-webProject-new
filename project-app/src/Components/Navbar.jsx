import React, { useState, useEffect } from 'react';
import './Navbar.css';
import fc2 from '../Assets/FoodCourt/fc2.png';
import user from '../Assets/FoodCourt/user.svg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change or window resize (for responsiveness)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    const handleRoute = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handleRoute);
    document.body.addEventListener('click', handleRoute);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('popstate', handleRoute);
      document.body.removeEventListener('click', handleRoute);
    };
  }, [menuOpen]);

  return (
    <nav className="nav">
      <div className="navcont">
        {/* Logo */}
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={fc2} alt="Logo" />
          </Link>
        </div>
        {/* Hamburger icon (FaBars) */}
        <button
          className={`hamburger-btn${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={e => {
            e.stopPropagation();
            setMenuOpen(open => !open);
          }}
          type="button"
        >
          <FaBars size={28} color="#fff" />
        </button>
        {/* Menu links */}
        <div
          className={`menu${menuOpen ? ' show' : ''}`}
          onClick={e => e.stopPropagation()}
          style={{ pointerEvents: 'auto' }}
        >
          <ul className="list-item">
            <li><Link to="/about" style={{ textDecoration: 'none' }}>AboutFC</Link></li>
            <li><Link to="/resturant" style={{ textDecoration: 'none' }}>Restaurant</Link></li>
            <li><Link to="/careers" style={{ textDecoration: 'none' }}>Careers</Link></li>
            <li><Link to="/faqs" style={{ textDecoration: 'none' }}>FAQs</Link></li>
          </ul>
        </div>
        {/* User icon */}
        <div className="icons">
          <Link to="/access" style={{ textDecoration: 'none' }}>
            <img src={user} alt="User Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import fc2 from '../Assets/FoodCourt/fc2.png';
import user from '../Assets/FoodCourt/user.svg';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

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
            {/* <img src={fc2} alt="Logo" /> */}
            <h1 style={{fontSize:28}}>FOODCOURT</h1>
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
          <Link to="/cart" style={{ textDecoration: 'none', marginRight: '1.2rem', position: 'relative' }}>
            <FaShoppingCart style={{ fontSize: 22, color: '#ffffffff' }} />
            {/* Cart count badge */}
            <CartCountBadge count={cart.length} />
          </Link>
          <Link to="/access" style={{ textDecoration: 'none' }}>
            <img src={user} alt="User Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

// CartCountBadge component
function CartCountBadge({ count }) {
  if (!count) return null;
  return (
    <span style={{
      position: 'absolute',
      top: -6,
      right: 2,
      background: '#e53935',
      color: '#fff',
      borderRadius: '50%',
      fontSize: 12,
      minWidth: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px',
      fontWeight: 700,
      zIndex: 2
    }}>{count}</span>
  );
}

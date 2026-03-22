import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Navbar = () => {
  const { cart, darkMode, toggleDarkMode } = useContext(CartContext);
  const cartCount = cart ? cart.reduce((sum, item) => sum + item.qty, 0) : 0;

  // Custom style to force-remove dots and fix spacing
  const navItemStyle = { listStyle: 'none', display: 'inline-block' };
  const navLinkStyle = { 
    fontFamily: 'Orbitron, sans-serif', 
    fontSize: '0.85rem', 
    letterSpacing: '1px' 
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top shadow ${darkMode ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-dark bg-primary'}`}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold d-flex align-items-center text-white" to="/" style={{ letterSpacing: '1.5px', fontFamily: 'Orbitron, sans-serif' }}>
          <i className="fas fa-microchip me-2 fs-3 text-warning"></i>
          <span>KAYN <span className="text-warning">TECH</span> & THREADS</span>
        </Link>

        {/* Mobile Toggler */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Added 'list-unstyled' to remove bullets and 'mb-0' to fix vertical alignment */}
          <ul className="navbar-nav ms-auto align-items-center list-unstyled mb-0">
            <li className="nav-item" style={navItemStyle}>
              <Link className="nav-link px-3 text-white fw-bold" to="/" style={navLinkStyle}>HOME</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className="nav-link px-3 text-white fw-bold" to="/products" style={navLinkStyle}>PRODUCTS</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className="nav-link px-3 text-white fw-bold" to="/about" style={navLinkStyle}>ABOUT US</Link>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <Link className="nav-link px-3 text-white fw-bold" to="/contact" style={navLinkStyle}>CONTACT</Link>
            </li>
            
            {/* Dark Mode Toggle */}
            <li className="nav-item px-2" style={navItemStyle}>
              <button 
                onClick={toggleDarkMode} 
                className={`btn btn-sm rounded-pill border-0 ${darkMode ? 'text-warning' : 'text-white'}`}
                style={{ fontSize: '1.2rem' }}
                type="button"
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>

            {/* Cart Button */}
            <li className="nav-item ms-lg-3" style={navItemStyle}>
              <Link 
                className={`nav-link btn btn-sm px-3 rounded-pill position-relative shadow-sm fw-bold border-0 ${
                  darkMode 
                  ? 'btn-outline-info text-info border border-info' 
                  : 'btn-warning text-dark'
                }`} 
                to="/cart"
                style={navLinkStyle}
              >
                <i className="fa fa-shopping-cart me-1"></i>
                <span className="d-lg-inline d-none">CART</span>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{fontFamily: 'sans-serif'}}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
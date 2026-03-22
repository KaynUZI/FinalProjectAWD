import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { darkMode } = useContext(CartContext);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="py-5" style={{ background: '#0b0e14', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-white">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>KAYN TECH <span className="text-primary">& CLOTHING STORE</span></h1>
              <p className="lead opacity-75">Your one-stop shop for electronics and gaming gear.</p>
              <Link to="/products" className="btn btn-primary rounded-pill px-4">Browse Products</Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="/banner.jpg" className="img-fluid rounded-4 shadow border border-secondary" alt="Banner" />
            </div>
          </div>
        </div>
      </section>

      {/* NEW ABOUT SECTION */}
      <section className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>ABOUT <span className="text-primary">THIS PROJECT</span></h2>
              <hr className="mx-auto bg-primary mb-4" style={{ width: '60px', height: '3px', border: 'none' }} />
              <p className="lead mb-4">
                We are dedicated to providing the best tech peripherals and apparel to the community. 
                Whether you're looking for high-performance storage solutions, reliable electronics, 
                or premium lifestyle gear, we've got you covered.
              </p>
              <div className="row g-4 mt-2">
                <div className="col-md-4">
                  <div className={`p-4 rounded-4 shadow-sm ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
                    <h5 className="fw-bold">Fast Delivery</h5>
                    <p className="small mb-0 opacity-75">Getting your gear to you as quickly as possible.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`p-4 rounded-4 shadow-sm ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
                    <h5 className="fw-bold">24/7 Support</h5>
                    <p className="small mb-0 opacity-75">Always here to help with your tech questions.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className={`p-4 rounded-4 shadow-sm ${darkMode ? 'bg-secondary' : 'bg-white'}`}>
                    <h5 className="fw-bold">Quality Gear</h5>
                    <p className="small mb-0 opacity-75">Curated selection of the most reliable products.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
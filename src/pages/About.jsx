import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const About = () => {
  const { darkMode } = useContext(CartContext);

  return (
    <div className={`container mt-5 mb-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
      <div className="row align-items-center">
        {/* Store Description & Mission */}
        <div className="col-lg-7">
          <h2 className="fw-bold mb-4 text-primary text-uppercase tracking-wider" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            About Kayn Tech & Threads
          </h2>
          <p className="lead">
            Welcome to <strong>Kayn Tech & Threads</strong>, your premier hybrid destination for high-performance gaming gear and exclusive street apparel. 
            Founded in 2025 by a 2nd-year IT student at FEU Institute of Technology, we believe that your setup and your style should both be top-tier.
          </p>
          
          <div className="mt-4">
            <h5 className={`fw-bold ${darkMode ? 'text-white' : ''}`}>
              <i className="fas fa-microchip text-primary me-2"></i>The Tech Hub
            </h5>
            <p className={darkMode ? 'opacity-75' : ''}>
              From NVIDIA RTX graphics cards to mechanical keyboards, we source the best hardware to ensure you never miss a frame in <em>Tekken 8</em> or <em>Mobile Legends</em>.
            </p>
          </div>

          <div className="mt-4">
            <h5 className={`fw-bold ${darkMode ? 'text-white' : ''}`}>
              <i className="fas fa-tshirt text-primary me-2"></i>The Clothing Line
            </h5>
            <p className={darkMode ? 'opacity-75' : ''}>
              We don't just sell hardware; we sell a lifestyle. Our apparel collection features premium, breathable fabrics designed for long gaming sessions and everyday comfort.
            </p>
          </div>

          {/* REFINED OUR MISSION SECTION */}
          <div 
            className={`mt-4 p-4 rounded-4 border-start border-4 shadow-lg ${
              darkMode ? 'text-white border-info' : 'bg-light text-dark border-primary shadow-sm'
            }`}
            style={darkMode ? { backgroundColor: '#1a1d23', borderLeftColor: '#0dcaf0' } : {}}
          >
            <h5 className={`fw-bold mb-2 ${darkMode ? 'text-info' : 'text-primary'}`}>
              OUR MISSION
            </h5>
            <p className="mb-0 fw-medium">
              To provide the <span className={darkMode ? 'text-info' : 'text-primary'}>FEU Tech</span> community with a one-stop shop that merges digital performance with physical style.
            </p>
          </div>
        </div>

        {/* Store Image */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="position-relative">
            <img 
              src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600" 
              alt="Tech and Fashion Setup" 
              className="img-fluid rounded-4 shadow-lg border border-secondary"
            />
            <div className="position-absolute bottom-0 end-0 bg-primary text-white p-3 rounded-start shadow d-none d-md-block">
              <h6 className="mb-0 fw-bold">Built by IT Students</h6>
              <small>For the Modern Gamer</small>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className={`row mt-5 pt-5 text-center border-top ${darkMode ? 'border-secondary' : ''}`}>
        <div className="col-12">
          <h3 className={`fw-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Project Technology Stack</h3>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className={darkMode ? 'text-light' : 'text-muted'}><i className="fab fa-react fa-2x mb-2 text-info"></i><br/>React.js</div>
            <div className={darkMode ? 'text-light' : 'text-muted'}><i className="fas fa-bolt fa-2x mb-2 text-warning"></i><br/>Vite</div>
            <div className={darkMode ? 'text-light' : 'text-muted'}><i className="fab fa-bootstrap fa-2x mb-2" style={{color: '#7952b3'}}></i><br/>Bootstrap 5</div>
            <div className={darkMode ? 'text-light' : 'text-muted'}><i className="fas fa-database fa-2x mb-2 text-success"></i><br/>FakeStoreAPI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
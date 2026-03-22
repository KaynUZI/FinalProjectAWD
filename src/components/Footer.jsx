import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">
          
          {/* Store Description */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Marcus Tech Hub</h5>
            <p className="small text-muted">
              Premium gaming peripherals and PC hardware. Designed for 2nd-year IT students and competitive gamers at FEU Institute of Technology.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Links</h5>
            <p><Link to="/" className="text-white text-decoration-none small">Home</Link></p>
            <p><Link to="/about" className="text-white text-decoration-none small">About Us</Link></p>
            <p><Link to="/terms" className="text-white text-decoration-none small">Terms</Link></p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact</h5>
            <p className="small"><i className="fas fa-home me-2"></i> P. Paredes St, Sampaloc, Manila</p>
            <p className="small"><i className="fas fa-envelope me-2"></i> support@marcustech.ph</p>
            <p className="small"><i className="fas fa-phone me-2"></i> +63 927 831 0325</p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          {/* Copyright */}
          <div className="col-md-7 col-lg-8">
            <p className="small">© 2026 <strong>Marcus Tech Hub</strong>. All rights reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-instagram"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-discord"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
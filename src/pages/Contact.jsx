const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row g-5">
        {/* Contact Form Section */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="fw-bold text-primary mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold small">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold small">Email Address</label>
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold small">Message</label>
                <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button className="btn btn-primary w-100 rounded-pill">
                <i className="fas fa-paper-plane me-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Store Info Section */}
        <div className="col-md-6">
          <div className="p-4 bg-dark text-white rounded-4 shadow-sm h-100 d-flex flex-column">
            <h3 className="fw-bold text-primary">Marcus Tech & Threads</h3>
            <p className="text-muted mt-2">Visit our hub at the FEU Institute of Technology campus or reach out via our digital channels.</p>
            
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>P. Paredes St, Sampaloc, Manila, 1015</span>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-phone"></i>
                </div>
                <span>+63 927 831 0325</span>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary p-3 rounded-circle me-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>support@marcustechthreads.ph</span>
              </div>
            </div>

            <div className="mt-auto pt-4 border-top border-secondary">
              <h6 className="fw-bold">Business Hours</h6>
              <p className="small mb-0 text-muted">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="small text-muted">Saturday: 9:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
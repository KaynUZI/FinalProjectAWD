const Terms = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary text-uppercase">Terms & Conditions</h2>
            <p className="text-muted">Last Updated: March 2026</p>
          </div>

          <div className="card shadow border-0 p-4 p-md-5 rounded-4">
            <section className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-shopping-bag text-primary me-2"></i>1. Store Operations</h5>
              <p className="text-muted ps-4">
                By using <strong>Kayn Tech & Threads</strong>, you agree to provide accurate information for all purchases. 
                As a specialized hub for FEU Tech students, we reserve the right to verify student IDs for exclusive campus-only discounts.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-user-shield text-primary me-2"></i>2. Data Privacy</h5>
              <p className="text-muted ps-4">
                Your privacy is a priority. We do not share your personal data, contact numbers, or delivery addresses with third parties. 
                Data collected is used strictly for order fulfillment and improving your shopping experience.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-truck text-primary me-2"></i>3. Shipping & Delivery</h5>
              <p className="text-muted ps-4">
                Delivery typically takes <strong>3-5 business days</strong>. For orders within the University Belt or 
                specifically the FEU Tech campus, same-day pickup options may be available during regular business hours.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold"><i className="fas fa-undo text-primary me-2"></i>4. Returns & Exchanges</h5>
              <p className="text-muted ps-4">
                Tech peripherals must be returned in their original packaging. Clothing items must be unworn and 
                unwashed with all original tags attached. Returns are accepted within 7 days of the delivery date.
              </p>
            </section>

            <div className="mt-5 p-3 bg-light rounded text-center">
              <small className="text-muted italic">
                This website is an academic project for the 2025-2026 school year. 
                All product data is provided via FakeStoreAPI for demonstration purposes.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Terms = () => {
  const { darkMode } = useContext(CartContext);

  return (
    <div className={`container py-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-primary text-uppercase">Terms & Conditions</h2>
            <p className={darkMode ? 'text-info opacity-75' : 'text-muted'}>Last Updated: March 2026</p>
          </div>

          <div className={`card shadow border-0 p-4 p-md-5 rounded-4 ${darkMode ? 'bg-dark border border-secondary text-white' : 'bg-white'}`}>
            <section className="mb-4">
              <h5 className="fw-bold">
                <i className={`fas fa-shopping-bag me-2 ${darkMode ? 'text-info' : 'text-primary'}`}></i>
                1. Store Operations
              </h5>
              <p className={`ps-4 ${darkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                By using <strong>Kayn Tech & Threads</strong>, you agree to provide accurate information for all purchases. 
                As a specialized hub for FEU Tech students, we reserve the right to verify student IDs for exclusive campus-only discounts.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">
                <i className={`fas fa-user-shield me-2 ${darkMode ? 'text-info' : 'text-primary'}`}></i>
                2. Data Privacy
              </h5>
              <p className={`ps-4 ${darkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                Your privacy is a priority. We do not share your personal data, contact numbers, or delivery addresses with third parties. 
                Data collected is used strictly for order fulfillment and improving your shopping experience.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">
                <i className={`fas fa-truck me-2 ${darkMode ? 'text-info' : 'text-primary'}`}></i>
                3. Shipping & Delivery
              </h5>
              <p className={`ps-4 ${darkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                Delivery typically takes <strong>3-5 business days</strong>. For orders within the University Belt or 
                specifically the FEU Tech campus, same-day pickup options may be available during regular business hours.
              </p>
            </section>

            <section className="mb-4">
              <h5 className="fw-bold">
                <i className={`fas fa-undo me-2 ${darkMode ? 'text-info' : 'text-primary'}`}></i>
                4. Returns & Exchanges
              </h5>
              <p className={`ps-4 ${darkMode ? 'text-light opacity-75' : 'text-muted'}`}>
                Tech peripherals must be returned in their original packaging. Clothing items must be unworn and 
                unwashed with all original tags attached. Returns are accepted within 7 days of the delivery date.
              </p>
            </section>

            <div className={`mt-5 p-3 rounded text-center ${darkMode ? 'bg-secondary bg-opacity-25' : 'bg-light'}`}>
              <small className={darkMode ? 'text-info' : 'text-muted'}>
                <em>This website is an academic project for the 2025-2026 school year. 
                All product data is provided via FakeStoreAPI for demonstration purposes.</em>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

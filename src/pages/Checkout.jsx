import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart, clearCart, darkMode } = useContext(CartContext);
    const [submitted, setSubmitted] = useState(false);
    const [finalTotal, setFinalTotal] = useState(0);

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        payment: 'cod'
    });

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.12;
    const total = subtotal + tax;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFinalTotal(total);
        clearCart();
        setSubmitted(true);
        window.scrollTo(0, 0); // Ensures user sees the success message
    };

    if (submitted) {
        return (
            <div className="container mt-5 text-center">
                <div className={`card p-5 shadow border-0 rounded-4 ${darkMode ? 'bg-dark text-white' : ''}`}>
                    <div className="mb-4">
                        <i className="fas fa-check-circle text-success" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h2 className="fw-bold">Order Received, {form.name}!</h2>
                    <p className="lead text-muted">Your tech and threads are being prepared for shipping.</p>
                    <hr className="my-4 mx-auto" style={{ width: '50%' }} />
                    <div className="mb-4">
                        <p className="mb-1 text-uppercase small fw-bold text-muted">Amount Paid</p>
                        <h3 className="text-primary fw-bold">P{finalTotal.toFixed(2)}</h3>
                    </div>
                    <Link to="/" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5 mb-5">
            <h2 className={`mb-4 fw-bold ${darkMode ? 'text-light' : ''}`}>
                <i className="fas fa-lock me-2 text-success"></i>Secure Checkout
            </h2>
            
            <div className="row g-4">
                {/* Left Side: Checkout Form */}
                <div className="col-lg-7">
                    <div className={`card p-4 shadow-sm border-0 rounded-4 ${darkMode ? 'bg-secondary text-white' : ''}`}>
                        <h5 className="mb-4 fw-bold">Shipping & Payment</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small fw-bold">Full Name</label>
                                    <input type="text" name="name" className="form-control" onChange={handleChange} required placeholder="Jerome Marcus Castro" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label small fw-bold">Email</label>
                                    <input type="email" name="email" className="form-control" onChange={handleChange} required placeholder="marcus@feutech.edu.ph" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small fw-bold">Phone Number</label>
                                <input type="text" name="phone" className="form-control" onChange={handleChange} required placeholder="0927 831 0325" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label small fw-bold">Delivery Address</label>
                                <textarea name="address" className="form-control" rows="3" onChange={handleChange} required placeholder="Bldg/House No, Street, Brgy, City"></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="form-label small fw-bold">Payment Method</label>
                                <select name="payment" className="form-select" onChange={handleChange}>
                                    <option value="cod">Cash on Delivery (COD)</option>
                                    <option value="gcash">GCash / Maya</option>
                                    <option value="card">Credit / Debit Card</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 btn-lg rounded-pill shadow-sm py-3 fw-bold">
                                Place Order (P{total.toFixed(2)})
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side: Order Summary */}
                <div className="col-lg-5">
                    <div className={`card p-4 shadow-sm border-0 rounded-4 sticky-top ${darkMode ? 'bg-dark text-white border border-secondary' : 'bg-light'}`} style={{ top: '90px', zIndex: '5' }}>
                        <h5 className="fw-bold mb-4">Order Summary</h5>
                        <div className="cart-items-preview mb-3" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded shadow-sm text-dark">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain' }} className="me-2" />
                                        <div className="small fw-bold text-truncate" style={{ maxWidth: '140px' }}>{item.name}</div>
                                    </div>
                                    <span className="small fw-bold">x{item.qty}</span>
                                    <span className="small fw-bold ms-2">P{(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-2 small">
                            <span className="text-muted">Subtotal:</span>
                            <span>P{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3 small">
                            <span className="text-muted">Tax (12% VAT):</span>
                            <span>P{tax.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between fw-bold border-top pt-3">
                            <h5 className="mb-0">Grand Total:</h5>
                            <h5 className="mb-0 text-primary">P{total.toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
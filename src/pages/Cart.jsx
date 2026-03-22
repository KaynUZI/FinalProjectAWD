import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, removeFromCart, updateQty, darkMode } = useContext(CartContext);

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    return (
        <div className={`container-fluid min-vh-100 py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <div className="container">
                <h2 className={`mb-4 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
                    <i className="fas fa-shopping-basket me-2 text-primary"></i>Your Shopping Cart
                </h2>
                
                {cart.length === 0 ? (
                    <div className={`text-center mt-5 py-5 card shadow-sm border-0 rounded-4 ${darkMode ? 'bg-secondary text-white' : ''}`}>
                        <div className="card-body">
                            <i className="fas fa-cart-arrow-down fa-4x text-muted mb-3"></i>
                            <h4>Your cart is empty!</h4>
                            <p className={darkMode ? 'text-light-50' : 'text-muted'}>Looks like you haven't added any tech or threads yet.</p>
                            <Link to="/products" className="btn btn-primary rounded-pill px-4 mt-2">Start Shopping</Link>
                        </div>
                    </div>
                ) : (
                    <div className="row g-4">
                        {/* List of Cart Items */}
                        <div className="col-lg-8">
                            {cart.map((item) => (
                                <div className={`card mb-3 shadow-sm border-0 rounded-4 overflow-hidden ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`} key={item.id}>
                                    <div className="row g-0 align-items-center p-3">
                                        <div className="col-3 col-md-2 text-center">
                                            <img 
                                                src={item.image} 
                                                className="img-fluid rounded shadow-sm bg-white p-1" 
                                                alt={item.name} 
                                                style={{ maxHeight: '80px', objectFit: 'contain' }}
                                            />
                                        </div>
                                        
                                        <div className="col-9 col-md-5">
                                            <div className="card-body py-0 ps-3">
                                                <h6 className={`card-title mb-1 text-truncate ${darkMode ? 'text-white' : 'text-dark'}`}>{item.name}</h6>
                                                <p className="text-primary fw-bold mb-0">P{item.price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-5 mt-3 mt-md-0 d-flex align-items-center justify-content-between justify-content-md-end">
                                            <div className="input-group input-group-sm w-auto me-3">
                                                <button 
                                                    className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'} px-2 border-0`} 
                                                    onClick={() => updateQty(item.id, -1)}
                                                >
                                                    <i className="fas fa-minus small"></i>
                                                </button>
                                                <span className={`input-group-text bg-transparent border-0 fw-bold px-2 ${darkMode ? 'text-white' : ''}`}>{item.qty}</span>
                                                <button 
                                                    className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-secondary'} px-2 border-0`} 
                                                    onClick={() => updateQty(item.id, 1)}
                                                >
                                                    <i className="fas fa-plus small"></i>
                                                </button>
                                            </div>
                                            <button 
                                                className="btn btn-link text-danger p-0 border-0 ms-2" 
                                                onClick={() => removeFromCart(item.id)}
                                                title="Remove Item"
                                            >
                                                <i className="fas fa-trash-alt fs-5"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary Sidebar */}
                        <div className="col-lg-4">
                            <div className={`card shadow-sm border-0 p-4 sticky-top rounded-4 ${darkMode ? 'bg-dark text-white border border-secondary' : 'bg-white'}`} style={{ top: '100px', zIndex: '5' }}>
                                <h4 className="fw-bold mb-4">Order Summary</h4>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className={darkMode ? 'text-light-50' : 'text-muted'}>Subtotal</span>
                                    <span className="fw-bold">P{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-4">
                                    <span className={darkMode ? 'text-light-50' : 'text-muted'}>Shipping</span>
                                    <span className="text-success fw-bold">FREE</span>
                                </div>
                                <hr className={darkMode ? 'border-secondary' : ''} />
                                <div className="d-flex justify-content-between mb-4 align-items-center">
                                    <h5 className="fw-bold mb-0">Total</h5>
                                    <h4 className="fw-bold text-primary mb-0">P{totalPrice.toFixed(2)}</h4>
                                </div>
                                <Link to="/checkout" className="btn btn-primary btn-lg w-100 shadow-sm rounded-pill py-3 fw-bold">
                                    Proceed to Checkout
                                </Link>
                                <div className="mt-3 text-center">
                                    <Link to="/products" className={`text-decoration-none small ${darkMode ? 'text-info' : 'text-muted'}`}>
                                        <i className="fas fa-arrow-left me-1"></i> Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
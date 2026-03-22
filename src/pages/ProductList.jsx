import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/CartContext.jsx';
import Sidebar from '../components/Sidebar';

const ProductList = () => {
    const { darkMode, toggleDarkMode, addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // States for Features
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    category: item.category,
                    price: item.price,
                    image: item.image,
                    description: item.description,
                    rating: Math.round(item.rating.rate)
                }));
                setProducts(formatted);
                setLoading(false);
            });
    }, []);

    // Combined Logic for Search, Category Filter, and Sorting
    const filteredProducts = products
        .filter((p) => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortOption === "low") return a.price - b.price;
            if (sortOption === "high") return b.price - a.price;
            if (sortOption === "name") return a.name.localeCompare(b.name);
            return 0;
        });

    if (loading) return <h3 className={`text-center mt-5 ${darkMode ? 'text-light' : ''}`}>Loading gear...</h3>;

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className={darkMode ? "text-light" : "text-dark"}>Marketplace</h2>
                <button className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-pill`} onClick={toggleDarkMode}>
                    {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>

            <div className="row">
                {/* SIDEBAR WITH PROPS */}
                <div className="col-lg-3 mb-4">
                    <Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                </div>

                <div className="col-lg-9">
                    {/* SEARCH & SORT BAR */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-8">
                            <input 
                                type="text" 
                                className={`form-control shadow-sm ${darkMode ? 'bg-dark text-white border-secondary' : ''}`} 
                                placeholder="Search products..." 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                        </div>
                        <div className="col-md-4">
                            <select className={`form-select shadow-sm ${darkMode ? 'bg-dark text-white border-secondary' : ''}`} onChange={(e) => setSortOption(e.target.value)}>
                                <option value="default">Sort By</option>
                                <option value="low">Price: Low to High</option>
                                <option value="high">Price: High to Low</option>
                                <option value="name">Name: A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={product.id}>
                                <div className={`card h-100 shadow-sm border-0 ${darkMode ? 'bg-secondary text-white' : ''}`}>
                                    <div className="bg-white p-2 rounded-top text-center">
                                        <img src={product.image} className="card-img-top p-3" style={{ height: '180px', objectFit: 'contain' }} alt={product.name} />
                                    </div>
                                    <div className="card-body text-center d-flex flex-column">
                                        <h6 className="card-title text-truncate">{product.name}</h6>
                                        <p className={`fw-bold mb-3 ${darkMode ? 'text-warning' : 'text-danger'}`}>P{product.price.toFixed(2)}</p>
                                        <div className="mt-auto d-grid gap-2">
                                            <button className="btn btn-info btn-sm text-white" onClick={() => setSelectedProduct(product)}>
                                                Quick View
                                            </button>
                                            <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* QUICK VIEW MODAL - REINSTATED */}
            {selectedProduct && (
                <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className={`modal-content border-0 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
                            <div className="modal-header border-0">
                                <h5 className="modal-title fw-bold">{selectedProduct.name}</h5>
                                <button type="button" className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} onClick={() => setSelectedProduct(null)}></button>
                            </div>
                            <div className="modal-body text-center">
                                <div className="bg-white p-3 rounded mb-3">
                                    <img src={selectedProduct.image} className="img-fluid" style={{ maxHeight: '250px' }} alt={selectedProduct.name} />
                                </div>
                                <p className={`mb-3 p-2 ${darkMode ? 'text-light' : 'text-muted'}`}>{selectedProduct.description}</p>
                                <h4 className="fw-bold text-primary">P{selectedProduct.price.toFixed(2)}</h4>
                            </div>
                            <div className="modal-footer border-0">
                                <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Close</button>
                                <button 
                                    className="btn btn-success" 
                                    onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
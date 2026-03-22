import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/CartContext.jsx';

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
    const { darkMode } = useContext(CartContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error("Category fetch error:", err));
    }, []);

    return (
        <aside className={`p-3 border rounded shadow-sm ${darkMode ? "bg-dark border-secondary text-white" : "bg-light text-dark"}`}>
            <h5 className="fw-bold mb-3 border-bottom pb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Categories
            </h5>
            <ul className="list-group list-group-flush">
                <li 
                    className={`list-group-item text-capitalize border-0 rounded mb-1 ${selectedCategory === "All" ? "bg-primary text-white" : (darkMode ? "bg-dark text-light" : "bg-light text-dark")}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedCategory("All")}
                >
                    <i className="fas fa-th-large me-2 small"></i>
                    All Products
                </li>

                {categories.map((cat, index) => (
                    <li 
                        key={index} 
                        className={`list-group-item text-capitalize border-0 rounded mb-1 ${selectedCategory === cat ? "bg-primary text-white" : (darkMode ? "bg-dark text-light opacity-75" : "bg-light text-dark")}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        <i className="fas fa-chevron-right me-2 small"></i>
                        {cat}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
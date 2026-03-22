import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <div className="product-img-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
        {product.discount && (
          <div className="sale-badge" style={{ position: 'absolute', top: '10px', left: '10px', background: 'red', color: 'white', padding: '4px 8px', borderRadius: '4px', zIndex: 1 }}>
            -{product.discount}%
          </div>
        )}
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>
        <div className="mb-2 text-warning">
          {[...Array(5)].map((_, index) => (
            <i key={index} className={index < product.rating ? "fas fa-star" : "far fa-star"}></i>
          ))}
        </div>
        <div className="mb-2">
          <span className="text-muted text-decoration-line-through me-2">P{product.oldPrice.toFixed(2)}</span>
          <span className="fw-bold text-danger">P{product.price.toFixed(2)}</span>
        </div>
        <button 
          className="btn btn-primary mt-auto" 
          onClick={() => addToCart(product)}
        >
          <i className="fas fa-shopping-cart me-2"></i>Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
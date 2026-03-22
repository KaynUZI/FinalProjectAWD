import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div className="container py-5 text-center">
      <h2>Product Details</h2>
      <p className="lead">Viewing details for Product ID: {id}</p>
      <div className="alert alert-info">Individual product data loading coming in Module 2!</div>
    </div>
  );
};

export default SingleProduct;
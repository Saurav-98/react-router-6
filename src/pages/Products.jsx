import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/about" className="btn">
        About
      </Link>
    </div>
  );
};

export default Products;

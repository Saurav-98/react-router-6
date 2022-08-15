import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about" className="btn">
        About
      </Link>
      <Link to="/products" className="btn">
        Products
      </Link>
    </div>
  );
};

export default Home;

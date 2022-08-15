import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/products" className="btn">
        Products
      </Link>
    </div>
  );
};

export default About;

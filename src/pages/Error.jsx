import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section">
      <h1> 404 </h1>
      <p>
        {' '}
        Page Not Found <h2>🪲</h2>
      </p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
};

export default Error;

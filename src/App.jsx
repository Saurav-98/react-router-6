import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import SharedLayout from './pages/SharedLayout';

const App = () => {
  return (
    <section className="section">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </section>
  );
};

export default App;

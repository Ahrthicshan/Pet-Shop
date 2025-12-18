import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';

import PetFood from './components/PetFood';

import PetAccessories from './components/PetAccessories';

import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/pet-food" element={<PetFood />} />
          <Route path="/accessories" element={<PetAccessories />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

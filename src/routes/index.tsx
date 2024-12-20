import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

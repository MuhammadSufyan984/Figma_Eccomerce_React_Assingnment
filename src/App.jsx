import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/anouncementBar/AnnouncementBar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import CategoryPage from './pages/category/CategoryPage';
import CartPage from './pages/cart/CartPage';

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* Dynamic Route for Dress Style Categories */}
        <Route path="/category/:styleName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;

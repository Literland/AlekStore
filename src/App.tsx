import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Slider from './components/Slider';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Slider />
      <FeaturedProducts />
      <ProductList />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;

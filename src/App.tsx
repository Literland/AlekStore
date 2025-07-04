import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Banner />
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;

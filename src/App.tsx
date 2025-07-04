import React from 'react';
import ProductList from './components/ProductList';
import './App.css';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;

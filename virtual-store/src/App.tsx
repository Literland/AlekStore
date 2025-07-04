import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
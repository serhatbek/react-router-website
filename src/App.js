import React from 'react';
import '../src/assets/css/main.css';

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feature from './pages/Feature';
import Price from './pages/Price';
import Contact from './pages/Contact';
import NotFoundPage from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/price" component={Price} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

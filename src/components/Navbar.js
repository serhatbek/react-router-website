import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="container">
      <div className="main-nav">
        <h1 className="site-logo">Parasan</h1>
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/home" className="main-nav__link">
              Home
            </Link>
          </li>

          <li className="main-nav__item">
            <Link to="/feature" className="main-nav__link">
              Feature
            </Link>
          </li>

          <li className="main-nav__item">
            <Link to="/price" className="main-nav__link">
              Price
            </Link>
          </li>

          <li className="main-nav__item">
            <Link to="/contact" className="main-nav__link">
              Contact
            </Link>
          </li>

          <li className="main-nav__item">
            <button className="btn__login">Login</button>
          </li>

          <li className="main-nav__item">
            <button className="btn btn-light">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Navbar;

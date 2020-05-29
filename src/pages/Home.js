import React from 'react';
import Image from '../assets/img/hero-banner.png';

const Home = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner-wrapper">
          <div className="hero-banner__img">
            <img src={Image} className="hero-banner__img"></img>
          </div>
          <div className="hero-banner__cta">
            <h2 className="hero-banner__cta-title">
              Advanced software made simple
            </h2>

            <p className="hero-banner__cta-text">
              Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun
              torquent velit felis commodo pellentesque nulla cras vel aliqua
              quisan nulla pede mi commoda
            </p>

            <button className="btn btn-light">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

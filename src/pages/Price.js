import React from 'react';

const Price = () => {
  return (
    <div className="container">
      <div className="price">
        <h2 className="price__title">Choose Your Pricing Plan</h2>

        <div className="grid">
          <div className="price__card">
            <h3 className="price__card-title">Normal</h3>
            <p className="price__card-text"> Attend only first day</p>
            <p className="price__card-price">
              <span className="dollar-sign">$</span>45.00
            </p>

            <div className="price__card-list">
              <p className="price__card-text">Unlimited Entrance</p>
              <p className="price__card-text">Comfortable Seat</p>
              <p className="price__card-text">Paid Certificate</p>
              <p className="price__card-text">Day One Workshop</p>
              <p className="price__card-text">Day One Workshop</p>
            </div>

            <button className="btn btn-dark">Buy Now</button>
          </div>

          <div className="price__card">
            <h3 className="price__card-title">Advanced</h3>
            <p className="price__card-text"> Attend only first day</p>
            <p className="price__card-price">
              <span className="dollar-sign">$</span>55.00
            </p>

            <div className="price__card-list">
              <p className="price__card-text">Unlimited Entrance</p>
              <p className="price__card-text">Comfortable Seat</p>
              <p className="price__card-text">Paid Certificate</p>
              <p className="price__card-text">Day One Workshop</p>
              <p className="price__card-text">Day One Workshop</p>
            </div>

            <button className="btn btn-dark">Buy Now</button>
          </div>

          <div className="price__card">
            <h3 className="price__card-title">Ultimate</h3>
            <p className="price__card-text"> Attend only first day</p>
            <p className="price__card-price">
              <span className="dollar-sign">$</span>65.00
            </p>

            <div className="price__card-list">
              <p className="price__card-text">Unlimited Entrance</p>
              <p className="price__card-text">Comfortable Seat</p>
              <p className="price__card-text">Paid Certificate</p>
              <p className="price__card-text">Day One Workshop</p>
              <p className="price__card-text">Day One Workshop</p>
            </div>

            <button className="btn btn-dark">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

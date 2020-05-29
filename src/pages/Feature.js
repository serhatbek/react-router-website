import React from 'react';

const Feature = () => {
  return (
    <div className="feature__wrapper">
      <div className="container">
        <div className="feature__info">
          <h2 className="feature__info-title">Awesome Soft Feature</h2>
          <p className="feature__info-paragraph">
            Vel aliquam quis, nulla pede mi commodo tristique nam hac. Luctus
            torquent velit felis commodo pellentesque nulla cras. Tincidunt
            hacvel alivquam quis nulla pede mi commodo tristique nam hac luctus
            torquent
          </p>
        </div>
        <div className="feature__grid">
          <div className="feature__card">
            <i class="fas fa-cube feature__card-icon"></i>
            <h3 className="feature__card-title">Unique Design</h3>
            <p className="feature__card-paragraph">
              Molestie lorem est faucibus faucibus erat phasellus placerat proin
              aptent
            </p>
          </div>

          <div className="feature__card">
            <i class="fas fa-mouse feature__card-icon"></i>
            <h3 className="feature__card-title">Unique Design</h3>
            <p className="feature__card-paragraph">
              Molestie lorem est faucibus faucibus erat phasellus placerat proin
              aptent
            </p>
          </div>

          <div className="feature__card">
            <i class="fas fa-headphones feature__card-icon"></i>
            <h3 className="feature__card-title">Unique Design</h3>
            <p className="feature__card-paragraph">
              Molestie lorem est faucibus faucibus erat phasellus placerat proin
              aptent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

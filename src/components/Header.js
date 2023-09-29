import React from "react";
import FoodLogo from "../../logo.png";
const Header = () => {
    return (
      <div className="header">
        <div className="left-container">
          <div className="logo-container">
            <img className="logo" src={FoodLogo} alt="My Image" />
          </div>
          <div className="location-container">
            <input
              className="location"
              type="text"
              id="manual-location"
              placeholder="Enter your location"
            />
            <button id="detect-location">Location</button>
          </div>
        </div>
        <div className="right-container">
          <div className="search-container">
            <input
              className="search"
              type="text"
              placeholder="Search for Food and Restaurants"
            />
          </div>
          <div className="nav-items">
            <ul>
              {/* <li>Home</li> */}
              <li>Cart</li>
              <li>Offers</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Header;  
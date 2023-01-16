import React from "react";
import "../css/colors.scss";
import "../css/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image"></div>
      <div className="overlay"></div>
      <div className="header-logo">
        <div className="logo">CityBike Project</div>
      </div>
    </div>
  );
};

export default Header;

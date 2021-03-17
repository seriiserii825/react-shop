import React from 'react';
import "./preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader"></div>
      <div className="otherloader"></div>
    </div>
  );
};

export default Preloader;

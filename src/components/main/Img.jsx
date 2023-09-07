import React from "react";
import "./img.scss";

const Img = ({ src, altText }) => {
  return (
    <div className="image-container">
      <span>{altText}☆</span>
    </div>
  );
};

export default Img;

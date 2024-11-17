// src/ImageSlider.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "https://images.puma.com/image/upload/f_auto,q_auto/global/380176/01/sv01/fnd/PNA/fmt/png/Cali-Star-Shoes",
  "https://images.puma.com/image/upload/f_auto,q_auto/global/371570/01/sv01/fnd/PNA/fmt/png/RS-X3-Puzzle-Shoes",
  "https://static.nike.com/a/images/f_png,q_auto,w_500,h_500,c_pad/pysqd15onjaeugu8mh4l/AH8050_005_A_PREM",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // This ensures the correct image is shown
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

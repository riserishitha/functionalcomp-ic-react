import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [index, setIndex] = useState(0);

  const handleIncrease = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDecrease = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const currentImage = images[index];

  return (
    <div className="flex">
      <div className="image-info">
        <h2>{currentImage.title}</h2>
        <p>{currentImage.subtitle}</p>
      </div>
      <ArrowBackIosIcon onClick={handleDecrease} className="arrows" />
      <img src={currentImage.img} alt="" />
      <ArrowForwardIosIcon onClick={handleIncrease} className="arrows" />
    </div>
  );
}

export default Carousel;

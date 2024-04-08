"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";

function Carousel() {
  const slides = [
    { image: "/img/back.webp", alt: "Slide 1" },
    { image: "/img/back.webp", alt: "Slide 2" },
    { image: "/img/back.webp", alt: "Slide 3" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide: any, index: any) => (
          <div className={styles.carouselItem} key={index}>
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className={styles.carouselBullets}>
        {slides.map((_: any, index: any) => (
          <span
            key={index}
            className={`${styles.bullet} ${
              currentSlide === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

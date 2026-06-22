import React, { useState } from "react";
import "./../css/Carousel.css";

interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button
        className="carousel-btn left"
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
      >
        ❮
      </button>

      <button
        className="carousel-btn right"
        onClick={() =>
          setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }
      >
        ❯
      </button>
    </div>
  );
}
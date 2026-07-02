import React, { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    title: "Wildly Comfortable. Super Natural.",
    btn1: "SHOP MEN",
    btn2: "SHOP WOMEN",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    title: "Made For Everyday Movement.",
    btn1: "NEW ARRIVALS",
    btn2: "SHOP NOW",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    title: "Designed For Comfort.",
    btn1: "EXPLORE",
    btn2: "BEST SELLERS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1674833482176-93f3bd66d3bc",
    title: "Designed For Comfort.",
    btn1: "EXPLORE",
    btn2: "BEST SELLERS",
  },
];





const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Next Slide
  useEffect(() => {
    const duration = 10000;

    const slideTimer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, duration / 50);

    return () => {
      clearTimeout(slideTimer);
      clearInterval(progressTimer);
    };
  }, [current]);

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  //   setProgress(0);
  // };

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % slides.length);
  //   setProgress(0);
  // };

  return (
    <section className="hero">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt="hero" />

          <div className="hero-overlay">
            <h1>{slide.title}</h1>

            <div className="hero-buttons">
              <button>{slide.btn1}</button>
              <button>{slide.btn2}</button>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="hero-progress">
        <div
          className="hero-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Arrows */}
      {/* <button className="hero-arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="hero-arrow right" onClick={nextSlide}>
        ❯
      </button> */}

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "active-dot" : ""}
            onClick={() => {
              setCurrent(index);
              setProgress(0);
            }}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default Hero;
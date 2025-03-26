import React, { useEffect, useRef, useState } from "react";

import { pepperService } from "../services/PepperService";

interface SlideShowProps {
  slides: Array<{
    id: number;
    content: React.ReactNode;
    explanation?: string;
  }>;
  autoAdvance?: boolean;
  autoAdvanceTimeout?: number;
}

export const SlideShow: React.FC<SlideShowProps> = ({
  slides,
  autoAdvance = false,
  autoAdvanceTimeout = 10000,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [maxPassed, setMaxPassed] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Clear the timer when component unmounts
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const explainCurrentSlide = () => {
    const slide = slides[currentSlideIndex];
    if (slide.explanation) {
      pepperService.shutUpAndContinue();
      setTimeout(() => {
        pepperService.animatedSpeak("Girl", slide.explanation);
      }, 2450);
    }
  };

  const showSlide = (index: number) => {
    const newIndex = ((index % slides.length) + slides.length) % slides.length;
    setCurrentSlideIndex(newIndex);

    if (!maxPassed) {
      explainCurrentSlide();
    } else if (autoAdvance) {
      // Set timer for automatic advancement
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        showSlide(newIndex + 1);
      }, autoAdvanceTimeout);
    }

    // If we've shown all slides, mark maxPassed
    if (newIndex === slides.length - 1) {
      setMaxPassed(true);
    }
  };

  const nextSlide = () => {
    pepperService.shutUpAndContinue();
    pepperService.playSound(7); // drop
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    showSlide(currentSlideIndex + 1);
  };

  const prevSlide = () => {
    pepperService.shutUpAndContinue();
    pepperService.playSound(7); // drop
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    showSlide(currentSlideIndex - 1);
  };

  const goToSlide = (index: number) => {
    showSlide(index);
  };

  const stopSlideShow = () => {
    console.log("SlideShow: stopSlideShow");
    pepperService.shutUpAndContinue();
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
      setCurrentSlideIndex(0);
    }
  };

  return (
    <div className="slideshow-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlideIndex ? "active" : ""}`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="slideshow-controls">
        <button onClick={prevSlide} className="prev">
          &#10094;
        </button>
        <div className="dots">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`dot ${index === currentSlideIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="next">
          &#10095;
        </button>
      </div>

      <button onClick={stopSlideShow} className="stop">
        Stop
      </button>
    </div>
  );
};

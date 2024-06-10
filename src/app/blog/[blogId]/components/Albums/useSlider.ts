import { useState, useCallback } from 'react';

export function useSlider(totalSlides: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(totalSlides / 5) - 1 ? 0 : prevIndex + 1,
    );
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(totalSlides / 5) - 1 : prevIndex - 1,
    );
  }, [totalSlides]);

  return { currentIndex, nextSlide, prevSlide };
}

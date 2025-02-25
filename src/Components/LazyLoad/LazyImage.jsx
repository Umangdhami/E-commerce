import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt='image', placeholder = './', className, data_hs_theme_appearance=null, style = null}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the image is loaded
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imageRef}
      src={isVisible ? src : placeholder}
      alt={alt}
      className={className}
      style={style && style}
      data-hs-theme-appearance={data_hs_theme_appearance || undefined}
    />
  );
};

export default LazyImage;

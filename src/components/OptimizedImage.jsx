import React, { useState, useEffect, useRef } from 'react';

const OptimizedImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onLoad={() => setIsLoaded(true)}
            onClick={onClick}
            loading="lazy"
            decoding="async"
          />
          {!isLoaded && (
            <div 
              className={`${className} absolute top-0 left-0 bg-tertiary animate-pulse`}
              style={{ backdropFilter: 'blur(10px)' }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage; 
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  'https://grras.com/files/sgbaxnrabaysf8ugrxu6/blog_image_mern_stck.jpeg?s=940x350',
  'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/python-developer.png',
  'https://5.imimg.com/data5/UA/SQ/MY-45949799/digital-marketing-services-500x500.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full sm:h-96 h-60 mx-auto overflow-hidden mt-16 ">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-96 flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full sm:object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white rounded-full p-2 shadow-md focus:outline-none"
      >
        ❮
      </button>
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white rounded-full p-2 shadow-md focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;

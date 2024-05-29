import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_3sW8oAMMAL68hW0J691ZlB5VaEroSQ5jw&s',
  'https://www.nickindia.com/wp-content/themes/nick/assets/images/mp10motu.png',
  'https://cdna.artstation.com/p/assets/images/images/044/400/794/large/luchia-kulanta-doggy-don-1.jpg?1639900174',
];

const HomeTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 sm:px-10 p-4">
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          Realise Your Potential With Assured Outcomes Delivered.
        </h1>
        <p className="text-xl sm:text-2xl mb-4">
          India’s only outcome-based career institute. Enter the tech workforce industry-ready.
        </p>
        <button className="sm:p-2 p-1 w-40 sm:w-fit  bg-red-700 font-semibold sm:text-xl text-white rounded-md mb-4">
          START LEARNING
        </button>
        <h6 className="text-sm">
          Awarded with the Excellent Training and Placements Award 2023
        </h6>
      </div>

      <div className="relative w-1/2 h-96 mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-96 flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;

'use client';
import { useState } from 'react';
import Image from 'next/image';

const SliderTest = () => {
  const slides = [
    {
      image: '/images/Desktop1.jpg',
      title: 'Dashboard',
      content:
        'Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes, directors, officers, and cap tables—all with just a click.',
    },
    {
      image: '/images/Desktop2.jpg',
      title: 'Digital Minute Book',
      content:
        'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded for seamless corporate record management.',
    },
    {
      image: '/images/Desktop3.jpg',
      title: 'The Activity Log',
      content:
        'The activity log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="rounded-lg object-cover"
          width={800}
          height={500}
          layout="responsive"
        />
      </div>

      <div className="w-full lg:w-1/2 px-6 lg:px-12 py-8 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
          {slides[currentIndex].title}
        </h2>
        <p className="font-bold md:text-base lg:text-lg text-white mb-4">
          {slides[currentIndex].content}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex
                ? 'bg-gray-800'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderTest;

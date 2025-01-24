'use client';
import { useState } from 'react';
import Image from 'next/image';

const SliderTest = () => {
  const slides = [
    {
      image: '/images/Desktop111.jpg',
      title: 'Dashboard',
      content: ' Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes,directors, officers, and cap tables—all with just a click.'
    },
    {
      image: '/images/minute_book.png',
      title: 'Digital Minute Book',
      content: 'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded or seamless corporate record management.'
    },
    {
      image: '/images/activity.png',
      title: 'The Activity log',
      content: 'The activity log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.'
    }
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
    <div className="relative w-full max-w-[1400px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] sm:max-h-[270px] md:max-h-[400px] lg:max-h-[800px] mx-auto flex flex-col lg:flex-row items-center justify-between">
    <div className="w-5/6 lg:w-full md:w-3/4 flex justify-center">
      <Image
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex}`}
        className="rounded-lg w-full h-auto object-cover"
        width={600}
        height={400}
        layout="responsive"
      />
    </div>
  
    <div className="w-full lg:w-1/2 px-6 lg:pl-8 flex flex-col justify-center lg:mt-0 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {slides[currentIndex].title}
      </h2>
      <p className="text-md sm:text-lg lg:text-xl text-gray-600 mb-4">
        {slides[currentIndex].content}
      </p>
    </div>
  
    <button
      onClick={prevSlide}
      className="absolute top-[90%] sm:top-1/2 left-4 sm:left-8 lg:left-[-70px] transform sm:-translate-y-1/2 sm:p-4 p-2 bg-white rounded-full hover:bg-opacity-70 transition"
      aria-label="Previous Slide"
    >
      <Image
        src="/images/previous.png"
        alt="Previous"
        width={20}
        height={20}
      />
    </button>
  
    <button
      onClick={nextSlide}
      className="absolute top-[90%] sm:top-1/2 right-4 sm:right-8 lg:right-[-70px] transform sm:-translate-y-1/2 sm:p-4 p-2 bg-white rounded-full hover:bg-opacity-70 transition"
      aria-label="Next Slide"
    >
      <Image
        src="/images/next.png"
        alt="Next"
        width={20}
        height={20}
      />
    </button>
  
    <div className="absolute bottom-0 sm:bottom-[15%] md:bottom-[0%] left-1/2 transform -translate-x-1/2 flex gap-2">
      {slides.map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'} cursor-pointer`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
  );
};

export default SliderTest;

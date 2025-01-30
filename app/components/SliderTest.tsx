'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SliderTest = () => {
  const slides = [
    {
      image: '/images/Dashboardnew.png',
      title: 'Dashboard',
      content:
        'Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes, directors, officers, and cap tables—all with just a click.',
    },
    {
      image: '/images/Mbook.png',
      title: 'Digital Minute Book',
      content:
        'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded for seamless corporate record management.',
    },
    {
      image: '/images/Activity1.png',
      title: 'The Activity Log',
      content:
        'The Activity Log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.',
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
    <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-between overflow-hidden bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="relative w-full h-[200px] lg:h-[600px] overflow-hidden rounded-t-lg lg:rounded-none lg:w-full">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex}`}
              className="rounded-lg object-cover"
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:w-1/2 px-6 lg:px-12 py-8 text-center lg:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {slides[currentIndex].title}
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed">
              {slides[currentIndex].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition"
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SliderTest;


// 'use client';
// import React from 'react';
// import { Carousel } from 'primereact/carousel';
// import 'primereact/resources/themes/lara-light-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import "./style.css";
// import Image from 'next/image';

// const slides = [
//   {
//     image: '/images/Dashboardnew.png',
//     title: 'Dashboard',
//     content:
//       'Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes, directors, officers, and cap tables—all with just a click.',
//   },
//   {
//     image: '/images/Mbook.png',
//     title: 'Digital Minute Book',
//     content:
//       'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded for seamless corporate record management.',
//   },
//   {
//     image: '/images/Activity1.png',
//     title: 'The Activity Log',
//     content:
//       'The Activity Log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.',
//   },
// ];

// const SliderTest = () => {
//   const slideTemplate = (slide) => {
//     return (
//       <div className="carousel-item">
//         <Image  width={800} 
//   height={800}  src={slide.image} alt={slide.title} className="carousel-image " />
//         <div className="carousel-content">
//           <h3>{slide.title}</h3>
//           <p>{slide.content}</p>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="carousel-container">
//       <Carousel
//         value={slides}
//         itemTemplate={slideTemplate}
//         numVisible={1}
//         numScroll={1}
//         circular
//         autoplayInterval={3000}
//       />
//     </div>
//   );
// };

// export default SliderTest;

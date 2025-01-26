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
        <p className="font-bold md:text-base lg:text-lg text-white mb-4 p-3">
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

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-8">
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





// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// const SliderTest = () => {
//   const slides = [
//     {
//       image: '/images/Desktop1.jpg',
//       title: 'Dashboard',
//       content:
//         'Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes, directors, officers, and cap tables—all with just a click.',
//     },
//     {
//       image: '/images/Desktop2.jpg',
//       title: 'Minute Book',
//       content:
//         'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded for seamless corporate record management.',
//     },
//     {
//       image: '/images/Desktop3.jpg',
//       title: 'Activity Log',
//       content:
//         'The activity log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => setCurrentIndex((currentIndex + 1) % slides.length);

//   const handlePrev = () => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

//   const goToSlide = (index) => setCurrentIndex(index);

//   return (
//     <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg">
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <Image
//           src={slides[currentIndex].image}
//           alt={slides[currentIndex].title}
//           className="rounded-lg object-cover"
//           width={800}
//           height={500}
//           layout="responsive"
//           priority
//         />
//       </div>

//       <div className="w-full lg:w-1/2 px-8 py-10 text-white flex flex-col justify-center text-center lg:text-left">
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{slides[currentIndex].title}</h2>
//         <p className="text-lg md:text-xl leading-relaxed">{slides[currentIndex].content}</p>
//       </div>

//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-gray-500"
//         aria-label="Previous Slide"
//       >
//         ❮
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-gray-500"
//         aria-label="Next Slide"
//       >
//         ❯
//       </button>

//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-4 h-4 rounded-full transition ${
//               index === currentIndex
//                 ? 'bg-gray-300 scale-110'
//                 : 'bg-gray-500 hover:bg-gray-400'
//             }`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderTest;




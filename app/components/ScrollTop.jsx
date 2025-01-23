'use client';
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 p-4 md:bg-black bg-black text-white rounded-full shadow-lg  transition-transform transform hover:scale-110 border-2 border-transparent border-white"
      aria-label="Scroll to top"
    >
       ⬆️
    </button>
    
    )
  );
};

export default ScrollToTopButton;

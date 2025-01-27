"use client";
import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const Offer = () => {
  const [expandedSections, setExpandedSections] = useState({
    developingSolution: false,
    seamlessIntegration: false,
    unparalleledCustomization: false,
    supportProductImprovements: false,
  });

  const handleToggle = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const sections = [
    {
      id: "developingSolution",
      title: "Developing your Solution",
      content: [
        "Your solution should meet your needs. That’s why we start by working with you to determine what your solution should look like and include. We customize our software to meet the needs of our customers. From company creation, to document management and signing flows, to corporate changes, we provide a variety of software implementations that your solution can take advantage of. With our proprietary blockchain-enabled system, you’ll always have a leg up on the competition, with unmatched data and user security and unparalleled transparency from the start.",
      ],
    },
    {
      id: "seamlessIntegration",
      title: "Seamless Integration",
      content: [
        "We have developed our platform to integrate seamlessly with your existing software infrastructure. We create custom APIs to facilitate seamless communication between our platform and your current systems. We also work with you to ensure data consistency across all systems with real-time updates.",
      ],
    },
    {
      id: "unparalleledCustomization",
      title: "Unparalleled Customization",
      content: [
        "Our platform can be endlessly customized to fit your needs and brand identity. Our client-centric philosophy enables you to decide everything about your software solution; there are no stock features. Your solution can be personalized to reflect your brand identity and values. From the user interface design to the feature suite, your solution will create a unique and immersive experience for your users. Your solution can also be custom built with scalability in mind, seamlessly accommodating the growth of the platform and user base.",
      ],
    },
    {
      id: "supportProductImprovements",
      title: "Support and Product Improvements",
      content: [
        "The journey doesn’t end with the development of your solution. With our first-class support systems, your software solution will always remain accessible, functional, and operational. We are committed to working with you to resolve any issues as they arise and are constantly monitoring your software to proactively identify any bugs or vulnerabilities. We are always looking for ways to improve and optimize your solution and new features and bug fixes will be present on your solution from Day 1. We also prepare training and documentation for your internal teams so they can maximize the value of your software solution.",
      ],
    },
  ];

  return (
    <div className="px-4 w-full max-w-[1400px] mx-auto py-8 items-center justify-center bg-black">
      <div className="mt-16">
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-6 pb-12 text-center">
          Corprite is committed to helping providers improve their corporate
          management solution for their clients. From the start, we offer
          development services to get the platform customized and integrated
          into existing systems. Beyond that, our commitment to ongoing,
          first-rate support ensures that the system is consistently functional
          and always receiving new improvements and features.
        </p>
      </div>

      {sections.map((section) => (
        <div key={section.id} className="w-full">
          <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md mb-4">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
              {section.title}
            </p>
            <button
              onClick={() => handleToggle(section.id)}
              className="text-2xl text-gray-300 focus:outline-none hover:text-white"
              aria-label="Toggle Content"
            >
              {expandedSections[section.id] ? (
                <FaMinusSquare className="text-white" />
              ) : (
                <FaPlusSquare className="text-white" />
              )}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              expandedSections[section.id] ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {expandedSections[section.id] && (
              <div className="bg-white p-4 rounded-lg shadow-md">
                {section.content.map((text, index) => (
                  <p
                    key={index}
                    className="text-black mb-4 text-sm sm:text-base leading-6"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;

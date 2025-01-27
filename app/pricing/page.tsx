import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Price = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="text-center max-w-3xl mx-auto py-10 px-4 ">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Pricing Tiers</h2>
        <p className="text-base sm:text-lg leading-relaxed text-white">
          Choose the best plan for your organization. From small businesses to large enterprises, we’ve got a plan that fits your needs with great discounts.
        </p>
      </div>

      <div className="bg-black px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {[
            { title: "Foundation", discount: "10%", price: "$486", monthly: "$45", no: "1-5" },
            { title: "Growth", discount: "20%", price: "$432", monthly: "$40", no: "6-20" },
            { title: "Mid-scale", discount: "30%", price: "$378", monthly: "$35", no: "21-30" },
            { title: "Scale", discount: "40%", price: "$324", monthly: "$30", no: "31-50" },
            { title: "Enterprise", discount: "60%", price: "$216", monthly: "$20", no: "51+" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white text-black bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">{plan.title}</h2>
              <p className="text-sm sm:text-lg mb-2 text-gray-600">No of Organization</p>
              <h2 className="text-lg sm:text-xl font-bold mb-3">{plan.no}</h2>
              <p className="text-sm sm:text-lg mb-2 text-gray-600">Discount</p>
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-600">{plan.discount}</h2>
              <p className="text-sm sm:text-lg mb-2 text-gray-600">Annual Price</p>
              <h2 className="text-xl sm:text-3xl font-bold mb-3">{plan.price}</h2>
              <button className="mb-4 bg-black text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm hover:bg-gray-900">
                Per Month
              </button>
              <h2 className="text-4xl sm:text-4xl font-bold mb-3">{plan.monthly}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <Link href="/contact" passHref>
          <button className="text-lg sm:text-xl font-bold text-black bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Price;

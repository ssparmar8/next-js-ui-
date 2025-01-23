import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
const Price = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-black text-black lg:min-h-[calc(100vh-6rem)] p-4 sm:p-4 flex flex-col overflow-hidden mt-32">
        <div className="flex flex-col items-center gap-4 flex-grow">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Pricing Tiers</h2>
            <p className="text-base sm:text-lg leading-relaxed text-white">
              Choose the best plan for your organization. From small businesses to large enterprises, we’ve got a plan that fits your needs with great discounts.
            </p>
          </div>

          <div className="bg-black text-black p-2 sm:p-2 rounded-lg shadow-md w-full pr-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              {[
                { title: "Foundation", discount: "10%", price: "$486", monthly: "$45", no: "1-5" },
                { title: "Growth", discount: "20%", price: "$432", monthly: "$40", no: "6-20" },
                { title: "Mid-scale", discount: "30%", price: "$378", monthly: "$35", no: "21-30" },
                { title: "Scale", discount: "40%", price: "$324", monthly: "$30", no: "31-50" },
                { title: "Enterprise", discount: "60%", price: "$216", monthly: "$20", no: "51+" },
              ].map((plan, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 p-2 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">{plan.title}</h2>
                  <p className="text-sm sm:text-lg mb-2">No of Organization</p>
                  <h2 className="text-lg sm:text-xl font-bold mb-3">{plan.no}</h2>
                  <p className="text-sm sm:text-lg mb-2">Discount</p>
                  <h2 className="text-lg sm:text-xl font-bold mb-4 text-green-600">{plan.discount}</h2>
                  <p className="text-sm sm:text-lg mb-2">Annual Price</p>
                  <h2 className="text-xl sm:text-3xl font-bold mb-3">{plan.price}</h2>
                  <button className="mb-4 bg-black text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm hover:bg-gray-900">
                    Per Month
                  </button>
                  <h2 className="text-4xl sm:text-4xl font-bold mb-3">{plan.monthly}</h2>
                </div>

              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/contact" passHref>
              <button className="text-xl font-bold text-black bg-white  p-3 rounded-lg shadow-lg transform transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;

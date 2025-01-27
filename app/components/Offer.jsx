import Link from "next/link";
import Image from "next/image";
import offer1 from "../../public/images/offer1.png";
import offer2 from "../../public/images/offer2.png";
import offer3 from "../../public/images/offer3.png";

const Offer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
          What We Offer
        </h2>
        <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-6 mt-4 md:mt-6">
          They work to find cures to cancer, travel to space, build tomorrow’s{" "}
          <br className="hidden md:block" />
          innovation, and beyond.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <Image src={offer1} alt="Offer 1" className="w-3/4 md:w-full" />
        </div>
        <div className="flex justify-center">
          <Image src={offer2} alt="Offer 2" className="w-3/4 md:w-full" />
        </div>
        <div className="flex justify-center">
          <Image src={offer3} alt="Offer 3" className="w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Offer;

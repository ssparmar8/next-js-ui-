import Image from "next/image";
import Choose from "../../public/images/choose.png";

const Choise = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-black">
      <div className="text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-12">
          Why Choose Corprite Over Others?
        </h2>
      </div>

      <div className="flex justify-center mt-8 md:mt-12">
        <Image
          src={Choose}
          alt="Why Choose Corprite"
          className="w-full md:w-3/4 lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default Choise;

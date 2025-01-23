import Square from '../../public/images/square.png';
import Link from 'next/link';
import Ellipse from '../../public/images/Ellipse1.png';
import Group1 from '../../public/images/Group1.png';
import Group2 from '../../public/images/Group2.png';
import Image from 'next/image';
import C_1 from '../../public/images/c_1.png';
import C_2 from '../../public/images/c_2.png';
import C_3 from '../../public/images/c_3.png';
import C_4 from '../../public/images/c_4.png';
import C_5 from '../../public/images/c_5.png';
import C_6 from '../../public/images/c_6.png';
import White from '../../public/images/whiteEllipse.png'
import Star from '../../public/images/star.png'
import Dot from '../../public/images/dot.png'
import ScrollToBottomButton from './ScrollBottom';

const Home = () => {
    return (
        <>
            <div
                className="relative flex flex-col lg:flex-row justify-between items-center text-white bg-black bg-cover bg-center ipad-mini:pt-[70px] ipad-air:pt-[50px]  custom-912:pt-[50px]"
                style={{
                    backgroundImage: "url('/images/bg_img.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "85vh",
                }}
            >
                {/* Add top padding to account for navbar height */}
                <div className="flex-1 text-center lg:text-left px-6 lg:px-24 mt-16 sm:mt-12">
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Streamline Your <br />
                        Entity and Equity <br />
                        Management
                    </h1>
                    <p className="mt-4 text-sm sm:text-lg text-gray-400 font-bold leading-6">
                        Simplify compliance, manage stakeholders,
                        <br /> and drive growth with Corprite intuitive platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 font-bold items-center">
                        <Link href="/contact" passHref>
                            <button className="bg-white text-black py-3 px-8 sm:py-4 sm:px-12 rounded-xl hover:bg-gray-800 hover:text-white">
                                Try it Now!
                            </button>
                        </Link>
                        <Link href="/pricing" passHref>
                            <button
                                className="text-white py-4 px-8 sm:py-4 sm:px-12 rounded-xl relative overflow-hidden"
                                style={{ backgroundImage: "url('/images/button.png')" }}
                            >
                                View Pricing
                            </button>
                        </Link>
                    </div>
                </div>

                <ScrollToBottomButton />

<div className="flex flex-col rounded-none max-w-[932px]">
      <img
        loading="lazy"
        draggable="false"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cb7f78cea349697434ff83593750577bf754bc5bb604eaebfe6b1fbf27bd7f0?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
        alt="Hero section banner"
        className="object-contain w-full rounded-none aspect-[1.39] max-md:max-w-full"
      />
    </div>


            </div>
        </>
    );
};

export default Home;

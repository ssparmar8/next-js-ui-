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

                <div className="hidden lg:block flex-1 relative custom-1024:mt-20">
                    <div>
                        <Image
                            src={Group2}
                            alt="Group2"
                            className="absolute bottom-[calc(133%+60px)]  left-[75%] transform -translate-x-3/4 -translate-y-3/4 w-64 h-54 custom-1024:w-44 h-54"
                        />
                        <div className="absolute bottom-[calc(163%+210px)] custom-1024:bottom-[calc(93%+160px)] left-[60%] custom-1024:left-[57%] transform -translate-x-3/4-translate-y-3/4 text-center text-white font-bold text-xl custom-1024:text-sm">
                            SIMPLIFIED<br />
                            ENTITY<br />
                            MANAGEMENT
                        </div>
                    </div>

                    <div>
                        <Image
                            src={Group2}
                            alt="Group2"
                            className="absolute bottom-[calc(133%+60px)] right-[50%] transform -translate-x-3/4 -translate-y-3/4 w-64 h-54 custom-1024:w-44 h-54"
                        />
                        <div className="absolute bottom-[calc(133%+150px)]  custom-1024:bottom-[calc(123%+120px)] right-[65%] custom-1024:right-[68%] transform -translate-x-3/4 -translate-y-3/4 text-center text-white font-bold text-xl custom-1024:text-sm">
                            TRANSPARENT,<br />
                            ENTITY,<br />
                            TRACKING
                        </div>
                    </div>
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute bottom-[calc(143%+230px)] right-[60%] transform -translate-x-3/4 -translate-y-3/4 w-6 h-54"
                    />
                    <Image
                        src={Dot}
                        alt="star"
                        className="absolute bottom-[calc(123%+150px)] right-[70%] transform -translate-x-3/4 -translate-y-3/4 w-2 h-54"
                    />
                    <Image
                        src={Dot}
                        alt="star"
                        className="absolute bottom-[calc(123%+120px)] right-[40%] transform -translate-x-3/4 -translate-y-3/4 w-2 h-54"
                    />

                    <Image
                        src={Ellipse}
                        alt="Ellipse"
                        className="absolute top-1/3 left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-11/12 h-auto"
                        layout="intrinsic"
                        height={1100}
                        width={1100}
                    />

                    <Image
                        src={White}
                        alt="White Center"
                        className="absolute top-1/3 left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto z-10"

                    />

                    <Image
                        src={Square}
                        alt="Square Inside Ellipse"
                        className="absolute top-1/3 left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-auto object-cover brightness-100 z-20"
                    />

                    <div>
                        <Image
                            src={Group2}
                            alt="Group2"
                            className="absolute top-[calc(133%+190px)] custom-1024:top-[calc(133%+90px)] left-[40%] transform -translate-x-1/2 w-64 h-54 custom-1024:w-44 h-54" // Adjusted for position below the Ellipse
                        />
                        <div className="absolute top-[calc(153%+220px)] custom-1024:top-[calc(123%+120px)] left-[40%] transform -translate-x-1/2 -translate-y-3/5 text-center text-white font-bold text-xl custom-1024:text-sm">
                            DIGITAL<br />
                            MINUTE<br />
                            BOOK
                        </div>
                    </div>
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute top-[calc(123%+100px)] custom-1024:top-[calc(73%+80px)] left-[20%] transform -translate-x-3/4 -translate-y-3/4 w-6 h-54"
                    />
                    <Image
                        src={Dot}
                        alt="star"
                        className="absolute top-[calc(123%+155px)]  custom-1024:top-[calc(63%+70px)] left-[27%] transform -translate-x-3/4 -translate-y-3/4 w-2 h-54"
                    />


                    <div>
                        <Image
                            src={Group1}
                            alt="Group1"
                            className="absolute top-1/3 left-0 transform -translate-x-1/2 -translate-y-1/2 w-64 h-54 custom-1024:w-44 h-54"
                        />
                        <div className="absolute top-1/3 right-3/5 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-xl custom-1024:text-sm">
                            AUTOMATED<br />
                            COMPLIANCE<br />
                            OVERSIGHT
                        </div>
                    </div>

                    <div>
                        <Image
                            src={Group1}
                            alt="Group1"
                            className="absolute top-1/3 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-54 custom-1024:w-44 h-54"
                        />
                        <div className="absolute top-1/3 left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-xl custom-1024:text-sm">
                            SECURE<br />
                            DISTRIBUTED<br />
                            LEDGER
                        </div>
                    </div>

                </div>

                <div className='block lg:hidden'>
                    <div className="mt-4 flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-8 sm:pb-12 md:pb-2 lg:pb-2">
                        <div className="relative flex flex-col items-center justify-center w-full">
                            <Image
                                src={Group2}
                                alt="Offer 1"
                            />
                            <div className="absolute text-center text-white font-bold text-xl sm:text-base md:text-xl">
                                SIMPLIFIED<br />
                                ENTITY<br />
                                MANAGEMENT
                            </div>
                        </div>

                        <div className="relative flex flex-col items-center justify-center w-full">
                            <Image
                                src={Group2}
                                alt="Offer 2"
                            />
                            <div className="absolute text-center text-white font-bold text-xl sm:text-base md:text-xl">
                                TRANSPARENT,<br />
                                ENTITY,<br />
                                TRACKING
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full">
                            <Image
                                src={Group2}
                                alt="Offer 3"
                            />
                            <div className="absolute text-center text-white font-bold text-xl sm:text-base md:text-xl">
                                DIGITAL<br />
                                MINUTE<br />
                                BOOK
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full">
                            <Image
                                src={Group2}
                                alt="Offer 4"
                            />
                            <div className="absolute text-center text-white font-bold text-xl sm:text-base md:text-xl">
                                AUTOMATED<br />
                                COMPLIANCE<br />
                                OVERSIGHT
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full">
                            <Image
                                src={Group2}
                                alt="Offer 4"
                            />
                            <div className="absolute text-center text-white font-bold text-xl sm:text-base md:text-xl">
                                SECURE<br />
                                DISTRIBUTED<br />
                                LEDGER
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Home;

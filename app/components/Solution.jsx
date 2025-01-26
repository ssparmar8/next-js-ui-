import Image from 'next/image';
import Solution1 from '../../public/images/s_1.png';
import Solution2 from '../../public/images/s_2.png';
import Solution3 from '../../public/images/s_3.png';

const Solution = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 bg-black">
            <div className="text-center m-6 p-6">
                <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white">
                    Tailored Solutions for Every Business
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 my-12">
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src={Solution1}
                        alt="Startups"
                        className="w-full max-w-md h-auto "
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center text-left lg:text-left">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">
                        Startups:
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 leading-8">
                        Simplified fundraising and shareholder management to
                        streamline the early stages of growth, allowing founders
                        to focus on innovation without getting bogged down in
                        complex admin tasks.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-0 my-12">
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src={Solution2}
                        alt="Enterprises"
                        className="w-full max-w-md h-auto"
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center text-left lg:text-left">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">
                        Enterprises:
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 leading-8">
                        Scalable governance solutions that grow with your
                        business. Corprite&apos;s platform adapts to the needs of
                        large organizations, providing robust tools for managing a
                        wide range of stakeholders and compliance requirements.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 my-12">
                <div className="lg:w-1/2 flex justify-center">
                    <Image
                        src={Solution3}
                        alt="Professional Services"
                        className="w-full max-w-md h-auto"
                    />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center text-left lg:text-left">
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6">
                        Professional Services:
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-500 leading-8">
                        Enhance your client offerings with Corprite’s white-label
                        solutions. Provide a branded, seamless experience for
                        your clients, helping them manage governance and
                        corporate structures with ease.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Solution;

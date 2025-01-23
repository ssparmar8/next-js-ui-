import Link from 'next/link';
import Image from 'next/image';
import Chain from '../../public/images/chain.png';
import Logo from '../../public/images/logo.png';
import X from '../../public/images/x.png';
import Instagram from '../../public/images/insta.png';
import Facebook from '../../public/images/face.png';
import ScrollToTopButton from './ScrollTop';
import './style.css';

const About = () => {
    return (
        <>
            <div
                className="relative left-[5%] right-[5%] top-0 inset-10 flex flex-col lg:flex-row justify-between items-center text-white bg-cover rounded-3xl border border-black z-10"
                style={{
                    backgroundImage: "url('/images/Rectangle2.png')",
                    width: '90%',
                    height: '63%',
                }}
            >
                <div className="w-full lg:w-1/2 text-center lg:text-left z-20 flex flex-col items-center lg:items-start justify-center py-8 lg:py-12 px-4 lg:px-12 ">
                    <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white m-2 ml-12">
                        Experience the
                    </p>
                    <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-white m-2 ml-12">
                        Corprite Difference
                    </p>
                    <p className="text-gray-400 text-md sm:text-lg lg:text-xl leading-6 mt-4 mb-6 ml-12">
                        See how our platform can transform your operations.
                    </p>
                    <Link href="/contact">
                        <button className="bg-white hover:bg-gray-800 text-black py-3 sm:py-4 px-6 sm:px-10 rounded-lg m-2 hover:text-white ml-12">
                            Request a Demo
                        </button>
                    </Link>
                </div>

                <div className="w-full flex justify-center ">
                    <Image
                        src={Chain}
                        alt="Corprite Difference"
                        className="rounded-3xl w-full"
                        width='90%'

                    />
                </div>
            </div>

            <div className="footer">
           <div className="footer-container">
             <nav className="nav">
               <ul className="nav-links">
                 <li><Link href="/">About Us</Link></li>
                 <li><Link href="/">Features</Link></li>
                 <li><Link href="/">Blog</Link></li>
                 <li><Link href="/">Careers</Link></li>
                 <li><Link href="/contact">Contact</Link></li>
               </ul>
               <div className="logo-container">
                 <Image src={Logo} alt="Logo" className="logo" />
               </div>
             </nav>
  
             <hr className="divider" />
  
             <nav className="nav">
               <ul className="nav-links">
                 <li><Link href="/about">@2025 Corprite</Link></li>
                 <li><Link href="https://incorporight.com/privacy-policy/" target="_blank">Privacy Policy</Link></li>
                 <li><Link href="https://incorporight.com/terms-of-service/" target="_blank">Terms of Service</Link></li>
               </ul>
               <div className="social-links">
                 <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                   <Image src={X} alt="Twitter" className="social-icon" />
                 </a>
                 <a href="https://www.facebook.com/incorporight/" target="_blank" rel="noopener noreferrer">
                   <Image src={Facebook} alt="Facebook" className="social-icon" />
                 </a>
                 <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fincorporight%2F&is_from_rle" target="_blank" rel="noopener noreferrer">
                   <Image src={Instagram} alt="Instagram" className="social-icon" />
                 </a>
               </div>
             </nav>
           </div>
         </div>

           
            <ScrollToTopButton />
        </>
    );
};

export default About;

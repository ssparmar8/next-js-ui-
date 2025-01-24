'use client';
import React, { useState } from "react";
import { FaHome, FaFacebookF, FaInstagram, FaTwitter, FaFileAlt, FaBlog } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";
import Image from 'next/image';
import CompanyLogo from '../../public/images/logoAct.png';
import Ontario from '../../public/images/ontario.png';
import Innovation from '../../public/images/innovation.png';
import Link from 'next/link';
import Navbar from "../components/Navbar";


const Contact = () => {

  // const Sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const [captchaValid, setCaptchaValid] = useState(false);


  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValid) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="w-full bg-black py-12 sm:py-16 mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
            Contact
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 py-8 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Looking for help? Fill out the form below.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
            {[
              { Icon: FaFacebookF, link: "https://facebook.com" },
              { Icon: FaTwitter, link: "https://twitter.com" },
              { Icon: FaInstagram, link: "https://instagram.com" },
              { Icon: BiLogoTiktok, link: "https://tiktok.com" },
              { Icon: TfiLinkedin, link: "https://linkedin.com" },
              { Icon: AiOutlineMail, link: "mailto:mail@incorporight.com" }
            ].map(({ Icon, link }, idx) => (
              <div key={idx} className="bg-gray-300 p-2 sm:p-2 rounded">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-black text-lg sm:text-xl" />
                </a>
              </div>
            ))}
          </div>

          <h3 className="text-xs sm:text-sm font-semibold tracking-widest mb-2 sm:mb-4">
            HEADQUARTERS
          </h3>
          <p className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <FaHome className="text-orange-600" /> 98 Avenue Road, Toronto
          </p>

          <h3 className="text-xs sm:text-sm font-semibold tracking-widest mb-2 sm:mb-4">
            SUPPORT
          </h3>
          <p className="flex items-center gap-3 sm:gap-4">
            <IoMailSharp className="text-orange-600" /> mail@incorporight.com
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white text-black rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:w-4/5">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
            Let&apos;s Connect
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="help" className="block text-sm font-semibold mb-2">
                How can we help?*
              </label>
              <textarea
                id="help"
                rows={4}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              {/* <ReCAPTCHA
              sitekey={Sitekey}
                onChange={handleCaptchaChange}
              /> */}
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="w-full bg-white h-auto min-h-screen flex flex-col justify-start items-center pt-12">
        <div className="w-11/12 lg:w-2/3 bg-black h-auto md:h-[50vh] rounded-2xl flex flex-col justify-center items-center text-center py-8 px-4">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The best way to start and maintain
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            a corporation. Ever.
          </p>
          <Link href="/contact">
            <button className="text-lg md:text-2xl bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-xl mb-6">
              Start Now
            </button>
          </Link>
          <p className="text-white text-sm md:text-base">
            Looking for help? Get in touch with us
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-12 px-6 max-w-6xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <Image
              src={CompanyLogo}
              alt="Startups"
              className="w-3/4 md:w-full max-w-md h-auto"
            />
          </div>

          <div className="w-full text-black  md:w-2/3 flex flex-col p-4">
            <p className="text-center md:text-center text-xl md:text-3xl font-semibold mb-6 text-black">
              Intermediary for
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="pb-2">Ontario Business Registry</p>
                <Image
                  src={Ontario}
                  alt="Ontario Business Registry"
                  className="w-1/3 mx-auto md:mx-0"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="pb-2">Corporations Canada</p>
                <Image
                  src={Innovation}
                  alt="Corporations Canada"
                  className="w-full mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-11/12 text-black lg:w-2/3 flex flex-col text-center md:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <p className="flex justify-center md:justify-center items-center gap-2">
                <FaBlog className="text-blue-400" />
                Blog
              </p>
              <p className="flex justify-center md:justify-center items-center gap-2">
                <FaFileAlt className="text-blue-400" />
                Status
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <p className="flex justify-center items-center gap-2">
                <IoMailSharp className="text-green-600" />
                mail@incorporight.com
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex justify-center md:justify-start items-center gap-2">
                <FaFileAlt className="text-pink-400" />
                <a href="https://incorporight.com/terms-of-service/"  target='_blank' className="text-pink-400 hover:text-pink-600">Terms of Use</a>
              </p>
              <p className="flex justify-center md:justify-start items-center gap-2">
                <FaFileAlt className="text-pink-400" />
                <a href="https://incorporight.com/privacy-policy/"  target='_blank' className="text-pink-400 hover:text-pink-600">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-black px-4 lg:px-24 py-4">
          <nav className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-400 text-sm sm:text-base mb-0">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white"
                >
                  TM © 2025 Corpright Inc. Patent Pending.
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-xl" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <BiLogoTiktok className="text-white text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <TfiLinkedin className="text-white text-xl" />
              </a>
              <a href="mailto:mail@incorporight.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail className="text-white text-xl" />
              </a>
            </div>
          </nav>
        </div>
      </div>

    </div>
  );
};

export default Contact;

'use client';
import React, { useState } from "react";
import { FaHome, FaFacebookF, FaInstagram, FaTwitter, FaFileAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";
import CompanyLogo from '../../public/images/logoAct.png';

const Contact = () => {
  const [captchaValid, setCaptchaValid] = useState(false);

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

      <header className="bg-black py-12 mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
            Contact
          </h1>
        </div>
      </header>

      <main className="flex flex-col md:flex-row gap-8 py-8 px-6 max-w-6xl mx-auto">

        <section className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-6">Looking for help? Fill out the form below.</p>

          <div className="flex flex-wrap gap-4 mb-6">
            {[{
              Icon: FaFacebookF, link: "https://facebook.com"
            }, {
              Icon: FaTwitter, link: "https://twitter.com"
            }, {
              Icon: FaInstagram, link: "https://instagram.com"
            }, {
              Icon: BiLogoTiktok, link: "https://tiktok.com"
            }, {
              Icon: TfiLinkedin, link: "https://linkedin.com"
            }, {
              Icon: AiOutlineMail, link: "mailto:mail@incorporight.com"
            }].map(({ Icon, link }, idx) => (
              <a href={link} key={idx} target="_blank" rel="noopener noreferrer" className="bg-gray-300 p-3 rounded-full">
                <Icon className="text-black text-lg" />
              </a>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold tracking-widest">HEADQUARTERS</h3>
            <p className="flex items-center gap-3 text-white">
              <FaHome className="text-orange-600" /> 98 Avenue Road, Toronto
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-widest">SUPPORT</h3>
            <p className="flex items-center gap-3 text-white">
              <IoMailSharp className="text-orange-600" /> mail@incorporight.com
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Image src={CompanyLogo} alt="Company Logo" width={200} height={150} />
          </div>
        </section>

        <section className="w-full md:w-1/2 bg-white text-black rounded-lg shadow-lg p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Let's Connect</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg"
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
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="help" className="block text-sm font-semibold mb-2">
                How can we help?*
              </label>
              <textarea
                id="help"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </section>

      </main>

      <footer className="bg-black py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center sm:text-left mb-4 sm:mb-0">
            TM © 2025 Corpright Inc. Patent Pending.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, BiLogoTiktok, TfiLinkedin, AiOutlineMail].map((Icon, idx) => (
              <a href="#" key={idx} className="text-white text-xl hover:text-gray-400 transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
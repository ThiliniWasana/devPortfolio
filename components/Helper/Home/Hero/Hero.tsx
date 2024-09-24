import { BaseInfo } from "@/Data/data";
import React from "react";
import {
  FaDownload,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full pt-[10vh] md:pt-[8vh] h-screen bg-[#0f0715] overflow-hidden relative">
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8 items-center">
            {/* Image content for mobile-first */}
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="200"
              className="mx-auto rounded-[1rem] overflow-x-hidden lg:order-2"
            >
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={380}
                height={380}
                className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] object-cover rounded-full"
              />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left lg:order-1">
              {/* Sub Heading */}
              <h1
                data-aos="fade-left"
                className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
              >
                {`Hey, I'm`} {BaseInfo.name}
              </h1>

              {/* Title */}
              <h1
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
              >
                {BaseInfo.position}
              </h1>

              {/* Description */}
              <p
                data-aos="fade-left"
                data-aos-delay="200"
                className="mt-6 text-sm md:text-base text-white text-opacity-60 text-justify"
              >
                {BaseInfo.description}
              </p>

              {/* Social Media Links */}
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="flex justify-center lg:justify-start space-x-4 my-6"
              >
                <a
                  href="https://www.facebook.com/thilini.wasana.94617999?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.instagram.com/thilinii___?igsh=eWtzMDh1bWVlaThs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-pink-600 hover:text-pink-800 transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://github.com/ThiliniWasana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-gray-800 hover:text-gray-900 transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/thilini-wasana-100462285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>

              {/* Button */}
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="flex justify-center lg:justify-start items-center mt-8"
              >
                <a
                  href="/ThiliniWasana-SE.pdf"
                  download
                  className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
                >
                  <span>Download CV</span>
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

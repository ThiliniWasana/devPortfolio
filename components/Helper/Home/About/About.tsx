import React from "react";
import SectionHeading from "../../SectionHeading";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="h-screen bg-gradient-to-b from-[#0f0715] to-[#0a0b1f] flex flex-col items-center justify-center">
        <SectionHeading>ABOUT ME</SectionHeading>
        {/* Description */}
        <p className="mt-6 text-center text-gray-300 text-lg sm:text-xl md:text-2xl w-4/5 md:w-2/5">
          I am currently studying for a BSc in Information Technology at the
          University of Moratuwa, with a strong enthusiasm for full-stack
          development. I am always eager to explore and master new technologies.
          My ambition is to use my expertise to connect development and
          operations, streamlining processes to deliver high-quality, dependable
          software solutions.
        </p>
        <div  data-aos="fade-right" data-aos-delay="100"  className=" flex flex-col md:flex-row items-center justify-center mt-9 space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2 ">
            <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
              Frontend Development
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-purple-800 flex flex-col items-center justify-center ">
              <FaCheck className="text-white " />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
              Backend Development
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center ">
              <FaCheck className="text-white" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
              Full Stack Development
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

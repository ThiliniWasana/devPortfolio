"use client"; // Mark this as a Client Component

import React, { useRef } from 'react';
import SectionHeading from '../../SectionHeading';
import { projectData } from '@/Data/data';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'; // Importing icons for navigation

const Project = () => {
  const scrollRef = useRef<HTMLDivElement>(null); // Ref to scroll container

  // Function to scroll right by 1 item width (for mobile responsiveness)
  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.clientWidth || 0;
      scrollRef.current.scrollBy({ left: cardWidth * 1, behavior: 'smooth' });
    }
  };

  // Function to scroll left by 1 item width (for mobile responsiveness)
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('div')?.clientWidth || 0;
      scrollRef.current.scrollBy({ left: -(cardWidth * 1), behavior: 'smooth' });
    }
  };

  return (
    <section id="projects">
    <div className='relative pt-16 pb-16 bg-gradient-to-b from-[#0a0b1f] to-[#0a0a0f]'>
      <SectionHeading>PROJECTS</SectionHeading>
      <div className='relative w-[70%] mx-auto mt-10'>
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className='flex overflow-x-auto space-x-6 scroll-smooth'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for webkit browsers */}
          <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {projectData.map((project) => (
            <div
              key={project.id}
              className='min-w-[calc(100%/1.1)] sm:min-w-[calc(100%/2-24px)] md:min-w-[calc(100%/3-24px)] bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300 flex flex-col items-center text-center'
              style={{ height: '400px' }} // Fixed height for each card
            >
              <Link href={project.url} target='_blank'>
                <Image
                  src={project.image}
                  alt='project'
                  width={300} 
                  height={200} 
                  className='w-full h-[200px] object-cover mb-7' 
                />
              </Link>
              <p className='text-gray-400 text-bold text-lg'>{project.projectname}</p>
              <p className='text-gray-300 text-lg'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow button - positioned relative to the page background */}
      <button
        onClick={scrollLeft}
        className='absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full hover:bg-gray-500 z-50'
        style={{ height: '50px', width: '50px' }} // Optional: Adjust button size
      >
        <FaChevronLeft />
      </button>

      {/* Right arrow button - positioned relative to the page background */}
      <button
        onClick={scrollRight}
        className='absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full hover:bg-gray-500 z-50'
        style={{ height: '50px', width: '50px' }} // Optional: Adjust button size
      >
        <FaChevronRight />
      </button>
    </div>
    </section>
  );
};

export default Project;

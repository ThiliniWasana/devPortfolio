
import React from 'react'
import SectionHeading from '../../SectionHeading'

const About = () => {
  return (
    
    <section id="about">
    <div className='h-screen bg-gradient-to-b from-[#0f0715] to-[#0a0b1f] flex flex-col items-center justify-center'>
        <SectionHeading>ABOUT ME</SectionHeading>   
      {/* Description */}
      <p className='mt-6 text-center text-gray-300 text-lg sm:text-xl md:text-2xl w-4/5 md:w-2/5'>
        I am currently studying for a BSc in Information Technology at the University of Moratuwa,
         with a strong enthusiasm for full-stack development. I am always eager to explore and master
        new technologies. My ambition is to use my expertise to connect development and operations,
         streamlining processes to deliver high-quality, dependable software solutions.
      </p>
    </div>
    </section>
  )
}

export default About



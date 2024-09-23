import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className='w-fit text-center mx-auto text-white text-2xl sm:text-3xl md:text-5xl  font-prociono'>
      {children}
    </h1>
  );
};

export default SectionHeading;
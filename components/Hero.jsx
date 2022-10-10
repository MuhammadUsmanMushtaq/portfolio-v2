import React from 'react';
import Image from 'next/image';

const Hero = ({ heading, massege }) => {
  return (
    <div className='max-w-[1240px] m-auto flex items-center flex-wrap justify-center h-screen'>
      {/* <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/70 z-[2]' /> */}
      <div className='p-5 md:flex-1'>
        <h2 className='text-4xl  text-[#292929]'>{heading}</h2>
        <p className='py-5 text-xl  text-[#292929]'>{massege}</p>
        <button className='px-12 py-4 font-bold  bg-blue-500 hover:bg-blue-600 text-[#FFF]'>
          Get in Touch
        </button>
      </div>
      <div className='z-[-1]  p-5 md:flex-1 w-[100%]'>
        <Image
          src='/dev.png'
          alt='hero'
          width={800}
          height={800}
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Hero;

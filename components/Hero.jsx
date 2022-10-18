import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='max-w-[1240px] m-auto flex items-center flex-wrap md:flex-col justify-center md:h-screen'>
      <div className='shadow-lg rounded-full p-2 h-60 w-60 my-4'>
        <Image
          className=' object-cover rounded-full'
          src='/images/profile_img.png'
          alt='hero'
          width={300}
          height={300}
        />
      </div>
      <div className='p-4 flex justify-center flex-col text-center tracking-wider leading-loose'>
        <h2 className='text-3xl md:text-4xl text-[#292929]'>
          Hi there. I am Usman, <br />
          <span className='italic text-blue-500 drop-shadow-md'>
            fullstack
          </span>{' '}
          developer
        </h2>
        <p className='py-4 text-xl text-[#292929] md:w-[600px]'>
          Passionate, Motivated fullstack devloper who design thoughtful digital
          experiences.
        </p>
        <div className='py-4 flex justify-center gap-8'>
          <Link href={'mailto:usman820901@gmail.com'}>
            <a target='_blank'>
              <HiOutlineMail
                className='cursor-pointer '
                size={24}
                color='gray'
              />
            </a>
          </Link>

          <Link href={'https://www.linkedin.com/in/muhammad-usman-78491149/'}>
            <a target='_blank'>
              <ImLinkedin className='cursor-pointer' size={24} color='gray' />
            </a>
          </Link>

          <Link href={'https://github.com/MuhammadUsmanMushtaq'}>
            <a target='_blank'>
              <FaGithub className='cursor-pointer' size={24} color='gray' />
            </a>
          </Link>
        </div>
        <Link href='/work'>
          <button className='mt-4 px-4 py-4 w-[200px] uppercase tracking-wider rounded m-auto font-bold  bg-blue-500 hover:bg-blue-600 text-[#FFF]'>
            My wrok
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

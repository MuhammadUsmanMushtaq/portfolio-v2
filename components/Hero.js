import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className='max-w-[1240px] p-4 m-auto flex items-center flex-wrap md:flex-col justify-center'>
      <div className='shadow-lg rounded-full p-2 h-60 w-60 my-4'>
        <Image
          className=' object-cover rounded-full'
          src='/images/profile_pic.jpg'
          alt='hero_image'
          width={300}
          height={300}
        />
      </div>
      <div className='flex justify-center flex-col text-center tracking-wider leading-loose'>
        <h2 className='text-3xl md:text-4xl text-[#292929]'>
          Hi there. I am Usman,
          <br />
          <span>a </span>
          <span className='italic text-blue-500 drop-shadow-md'>
            Fullstack{' '}
          </span>
          Web Developer
        </h2>
        <p className='py-6 tracking-wider text-xl text-[#292929] md:w-[600px]'>
          Always passionate and motivated to design thoughtful digital
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
          <button className=' mt-4 px-6 py-4 w-[240px] uppercase tracking-wider rounded m-auto font-bold  bg-blue-500 hover:bg-blue-600 text-[#FFF] hover:shadow-md '>
            My work
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

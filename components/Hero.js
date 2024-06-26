import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Transitions from './Transitions';

const Hero = () => {
  return (
    <Transitions>
      <div className='max-w-[600px] p-4 m-auto text-center '>
        <div className='m-auto shadow-lg rounded-full p-2 h-60 w-60 mb-4'>
          <Image
            className=' object-cover rounded-full'
            src='/images/profile_pic.jpg'
            alt='hero_image'
            width={300}
            height={300}
          />
        </div>
        <div className='tracking-wider leading-loose'>
          <h2 className='text-3xl md:text-4xl'>
            Hi there. I am Usman,
            <br />a Frontend ux/ui developer
          </h2>
          <p className='py-6 tracking-wider text-xl'>
            Always passionate and motivated to design thoughtful digital
            experiences.
          </p>
          <div className='py-4 flex justify-center items-center gap-6'>
            <Link href={'mailto:usman820901@gmail.com'}>
              <a target='_blank'>
                <HiOutlineMail
                  className='cursor-pointer text-gray-400 hover:text-blue-500 hover:animate-pulse'
                  size={28}
                />
              </a>
            </Link>

            <Link href={'https://www.linkedin.com/in/muhammad-usman-78491149/'}>
              <a target='_blank'>
                <ImLinkedin
                  className='cursor-pointer text-gray-400 hover:text-blue-500 hover:animate-pulse'
                  size={24}
                />
              </a>
            </Link>

            <Link href={'https://github.com/MuhammadUsmanMushtaq'}>
              <a target='_blank'>
                <FaGithub
                  className='cursor-pointer  text-gray-400 hover:text-blue-500 hover:animate-pulse'
                  size={24}
                />
              </a>
            </Link>
          </div>
          <Link href='/work'>
            <button className='mt-4 px-4 py-2 w-[180px] tracking-wider rounded m-auto bg-blue-500 hover:bg-blue-600 text-[#FFF] hover:shadow-md'>
              My work
            </button>
          </Link>
        </div>
      </div>
    </Transitions>
  );
};

export default Hero;

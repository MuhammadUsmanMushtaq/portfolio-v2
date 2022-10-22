import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolio = () => {
  return (
    <div className='m-auto p-6  '>
      <h1 className='text-3xl md:text-4xl m-auto text-center pb-10 uppercase'>
        portfolio v1
      </h1>
      <div className='flex justify-center items-center flex-wrap  drop-shadow  bg-gray-50 rounded max-w-[1240px] m-auto p-6 mb-6'>
        <div className=' '>
          <Image
            src='/images/portfolio_v1.png'
            alt='portfolio'
            width={900}
            height={760}
            objectFit='contain'
          />
        </div>
      </div>

      <h1 className='text-3xl md:text-4xl py-6 text-center'>
        Project Overview
      </h1>
      <div className='flex flex-wrap  max-w-[800px] m-auto  md:p-0'>
        <h2 className=' py-2 text-1xl uppercase tracking-wider font-bold'>
          challenge
        </h2>
        <p className='text-xl tracking-wider leading-loose mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
          quisquam? Consequuntur dolorum modi qui fuga mollitia.
        </p>

        <h2 className='py-2 text-1xl uppercase tracking-wider font-bold '>
          solution
        </h2>
        <p className='text-xl tracking-wider leading-loose mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
          quisquam? Consequuntur dolorum modi qui fuga mollitia.
        </p>

        <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
          tools
        </h2>

        <p className=' md:w-[800px] tracking-wider leading-loose mb-4 uppercase'>
          react, styled-components
        </p>
        <div className=' flex justify-between items-center mb-4 '>
          <Link href='https://muhammad-usman.netlify.app/'>
            <a
              target='_blank'
              className='text-1xl tracking-wider uppercase px-6 py-1 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF] mr-4 '
            >
              live
            </a>
          </Link>
          <Link href='https://github.com/MuhammadUsmanMushtaq/portfolio'>
            <a
              target='_blank'
              className=' text-1xl tracking-wider uppercase px-6 py-1 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'
            >
              github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default portfolio;

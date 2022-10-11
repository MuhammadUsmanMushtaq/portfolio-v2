import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const starwars = () => {
  return (
    <div className='m-auto p-4 '>
      <h1 className='text-4xl  m-auto text-center py-10 '>Star Wars SWAPI</h1>
      <div className='flex justify-center items-center flex-wrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=' '>
          <Image
            src='/starwars_SWAPI.png'
            alt='starwars'
            width={900}
            height={760}
            objectFit='cover'
          />
        </div>
      </div>

      <h1 className='text-3xl md:text-4xl py-6 text-center'>
        Project Overview
      </h1>
      <div className='flex flex-wrap md:justify-between max-w-[1240px] m-auto p-6 md:p-0'>
        <div className='md:w-[480px]'>
          <h2 className=' py-2 text-1xl uppercase tracking-wider font-bold'>
            challenge
          </h2>
          <p className='text-xl tracking-wider leading-loose mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
            quisquam? Consequuntur dolorum modi qui fuga mollitia.
          </p>
        </div>

        <div className='md:w-[480px] '>
          <h2 className='py-2 text-1xl uppercase tracking-wider font-bold '>
            solution
          </h2>
          <p className='text-xl tracking-wider leading-loose '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
            quisquam? Consequuntur dolorum modi qui fuga mollitia.
          </p>
        </div>
        <div className='md:w-[480px]'>
          <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
            tools
          </h2>
          <p className='flex flex-col flex-wrap text-xl tracking-wider leading-loose mb-4'>
            HTML, CSS, Javascript, React, SWAPI API
          </p>
        </div>
        <div className='md:w-[480px] '>
          <Link href='https://starwars-swapi-usman.netlify.app/'>
            <a
              href='https://starwars-swapi-usman.netlify.app/'
              target='_blank'
              className=' text-1xl font-bold tracking-wider uppercase text-blue-600 mr-4 '
            >
              live
            </a>
          </Link>
          <Link href='https://starwars-swapi-usman.netlify.app/'>
            <a
              href='https://starwars-swapi-usman.netlify.app/'
              target='_blank'
              className=' text-1xl font-bold tracking-wider uppercase  text-blue-600'
            >
              github
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default starwars;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const starwars = () => {
  return (
    <div className='  m-auto p-4'>
      <h1 className='text-4xl  m-auto text-center py-10 '>Star Wars SWAPI</h1>
      <div className='flex justify-center items-center flex-wrap  bg-blue-100 max-w-[1240px] m-auto p-6  mb-6'>
        <div className=' '>
          <Image
            src='/starwars_SWAPI.png'
            alt='starwars'
            width={900}
            height={760}
            objectFit='cover'
          />
        </div>
        <p className='max-w-[800px] text-center m-auto py-4 text-xl tracking-wider leading-loose'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          laborum porro omnis ea vero laboriosam tenetur illo iure possimus.
          Iste, porro tenetur voluptas deserunt architecto accusamus maxime
          alias odio impedit error ipsam earum aspernatur eaque provident id
          nulla, eveniet rem ab labore fugiat optio et.
        </p>
      </div>

      <h1 className='text-3xl py-6 text-center'>Project Overview</h1>
      <div className='flex flex-wrap md:justify-between bg-blue-100 max-w-[1240px] m-auto p-6'>
        <div className='md:w-[480px]'>
          <h2 className=' py-2 text-1xl uppercase tracking-wider font-bold'>
            Challenge
          </h2>
          <p className='text-xl tracking-wider leading-loose mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
            quisquam? Consequuntur dolorum modi qui fuga mollitia.
          </p>
        </div>

        <div className='md:w-[480px] '>
          <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
            tools
          </h2>
          <p className='flex flex-col flex-wrap  text-xl tracking-wider leading-loose mb-4'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span>React</span>
            <span>SWAPI API</span>
          </p>
        </div>
        <div className='md:w-[480px] -order-1 md:order-none'>
          <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
            solution
          </h2>
          <p className='text-xl tracking-wider leading-loose '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            esse veniam sit repudiandae tenetur dolorem nobis sapiente magnam
            quisquam? Consequuntur dolorum modi qui fuga mollitia.
          </p>
        </div>
        <div className='flex justify-center gap-4 items-center m-auto py-6 md:w-[480px]'>
          <button className='px-6 py-2 border-solid border-2 uppercase tracking-wider rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='https://starwars-swapi-usman.netlify.app/'>
              Live demo
            </Link>
          </button>
          <button className='px-6 py-2 border-solid border-2 uppercase tracking-wider rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='https://starwars-swapi-usman.netlify.app/'>github</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default starwars;

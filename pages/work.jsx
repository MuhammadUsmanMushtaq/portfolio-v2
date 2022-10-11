import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div className='p-6'>
      <h1 className='text-4xl max-w-[1240px] m-auto text-center py-10 '>
        My Work
      </h1>
      <div className='flex justify-center items-center flex-wrap md:flex-nowrap bg-blue-100 max-w-[1240px] m-auto p-10 mb-6'>
        <div className=' '>
          <Image
            src='/starwars_SWAPI.png'
            alt='starwars'
            width={400}
            height={400}
            objectFit='cover'
          />
        </div>
        <div className='pt-4 md:p-10'>
          <h2 className='text-3xl font-bold'>STAR WARS SWAPI</h2>
          <p className='text-xl py-10'>
            A star war characters information search app and it uses SWAPI API
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/starwars'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap bg-blue-100 max-w-[1240px] m-auto p-10'>
        <div className=''>
          <Image
            src='/starwars_SWAPI.png'
            width={400}
            height={400}
            objectFit='cover'
          />
        </div>
        <div className='pt-4 md:p-10'>
          <h2 className='text-3xl font-bold'>STAR WARS SWAPI</h2>
          <p className='text-xl py-10'>
            A star war characters information search app and it uses SWAPI API
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/starwars'>Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;

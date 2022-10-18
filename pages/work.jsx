import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div className='p-6'>
      <h1 className='text-4xl max-w-[1240px] m-auto text-center py-10 '>
        My Work
      </h1>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/fake_imdb.png'
            alt='starwars'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6 '>
          <h2 className='text-2xl font-bold'>FAKE IMDB</h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            IMDB movie search fullstack app and it uses OMDB API, react, node,
            and express.
          </p>
          <button className='px-8 py-3 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/fakeimdb'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/starwars_SWAPI.png'
            alt='starwars'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6'>
          <h2 className='text-2xl font-bold'>STAR WARS SWAPI</h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            A star war characters information search app and it uses SWAPI API,
            react, styled components and netlify for deployment.
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/starwars'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/waitcure.png'
            alt='starwars'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6 '>
          <h2 className='text-2xl font-bold'>WAITCURE</h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            WaitCure by Zymego is a web application to improve patient waiting
            times. Patients can reschedule, get earlier times or cancel their
            appointments through a simple UI.
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/waitcure'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/EuBike.png'
            alt='starwars'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6 '>
          <h2 className='text-2xl font-bold uppercase'>
            UX Review for EU-Bikes
          </h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            The main aim of this project was to analyze the user experience of
            the EU bike service and to recommend improvements to satisfy both
            the user goals and the business goals.
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/eubikes'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/kyh_page.png'
            alt='kyh'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6 '>
          <h2 className='text-2xl font-bold uppercase'>kyh landing page</h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            Redesign of the frontend program page of KYH using vanilla
            Javascript, HTML and CSS.
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/kyh'>Read more</Link>
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap md:flex-nowrap  bg-blue-100 max-w-[1240px] m-auto p-6 mb-6'>
        <div className=''>
          <Image
            src='/images/portfolio_v1.png'
            alt='portfolio'
            width={360}
            height={360}
            objectFit='contain'
          />
        </div>
        <div className='md:pl-6'>
          <h2 className='text-2xl font-bold'>PORTFOLIO v1</h2>
          <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
            Personal portfolio page using react, styled components and netlify
            for deployment.
          </p>
          <button className='px-12 py-4 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
            <Link href='/work/portfolio'>Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;

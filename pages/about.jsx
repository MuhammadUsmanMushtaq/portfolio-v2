import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className='p-6 flex flex-wrap gap-4 md:justify-center  m-auto  max-w-[1240px]'>
      <div className='py-4 md:flex-1 '>
        <Image
          src='/starwars_SWAPI.png'
          width={540}
          height={600}
          objectFit='cover'
        />
      </div>
      <div className='md:flex-1 py-4'>
        <h1 className='text-3xl'>Hi there, I'am Usman</h1>
        <p className='py-4 text-xl tracking-wider leading-loose'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          incidunt nostrum aliquid mollitia animi odit quae distinctio est
          eligendi? Ipsa nihil quia aut fugiat consequuntur excepturi voluptate
          deserunt quo possimus? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. <br />
          <br />
          Magnam ratione facilis dicta reiciendis dolore impedit deleniti,
          eveniet ullam sunt, quas et doloremque nostrum nesciunt odio, vitae
          corrupti? Aut, quidem repudiandae.
        </p>
      </div>
      <div className='max-w-[1240px] flex flex-col'>
        <h1 className='text-3xl md:text-6xl'>Other things i enjoy...</h1>
        <ul className='py-4 pl-10 text-xl list-disc tracking-wider leading-loose'>
          <li className=' m-2'>
            <span className='font-bold'>Food & Desserts</span> 🥗 🍩I’m always
            on the lookout for the next best food, dessert, and coffee spots in
            the DMV area. I love taking and editing photos of places I visit and
            food that I eat
          </li>
          <li className=' m-2'>
            <span className='font-bold'>Games</span> 🎮 I love playing games
            with friends in my downtime. Currently playing: Call of Duty: Modern
            Warfare, League of Legends, Stardew Valley, and Overwatch. I also
            enjoy playing board games!
          </li>
          <li className=' m-2'></li>
          <li className=' m-2'></li>
        </ul>
      </div>
    </div>
  );
};

export default about;

import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className=' p-6 flex flex-wrap gap-4 md:justify-center  m-auto  max-w-[1240px]'>
      <div className='py-4 md:flex-1 '>
        <Image
          src='/images/about.jpg'
          width={540}
          height={600}
          objectFit='cover'
        />
      </div>
      <div className='md:flex-1 py-4'>
        <h1 className='text-3xl  md:text-6xl'>Hi there, I'am Usman</h1>
        <p className='py-4 text-lg tracking-wider leading-loose'>
          I am a fullstack software developer based in stockholm with a passion
          for building web and mobile applications. I have a strong background
          in designing and I am open to new challenges. I am a fast learner and
          I am always looking for new opportunities to learn and grow.
          <br />
          <br />
          Growing up, whenever someone asked me what my dream was, I would
          always say, “I want to be an artist”. I was constantly immersed in
          creative activities - writing poetries, lyrics, designing, and
          daydreaming about what I could create next. While in the midst of all
          that, technology started to become a big part of my life as well, and
          my interest in the constantly evolving digital world continued to
          grow. <br />
          <br />
          Previously, I worked as an UX/UI developer at SustainLab. My
          experiences in that role have sharpened my skills in digital design,
          working in a fast paced, high-pressure environment, empathizing with
          people, doing research and analysis, identifying goals and needs, and
          efficiently finding solutions to a broad variety of problems and user
          pain points.
          <br />
          <br />
          <span className='font-bold '>
            How did i get into software development?
          </span>
          <br />I was always interested in a career in tech, but I didn't know
          how to get started. I was working as a UX/UI designer at SustainLab,
          and I was looking for a way to expand my skillset. I started to learn
          how to code, and I fell in love with it. I was able to apply my design
          skills to the code, and I was able to create things that I never
          thought I could. I decided to make a career change, and I am now a
          fullstack software developer.
        </p>
      </div>
      <div className='max-w-[1240px]flex flex-col'>
        <h1 className='text-3xl md:text-6xl'>Other things i enjoy...</h1>
        <ul className='py-4 pl-10 text-lg list-disc tracking-wider leading-loose'>
          <li className=' m-2'>
            <span className='font-bold'>Food & Desserts</span> 🥗 🍩I’m always
            on the lookout for the next best food, dessert, and coffee spots in
            the area. I love cooking tardination dishes and trying out new
            recipies as well. I like spicy food and I’m always up for a good
            challenge.
          </li>
          <li className=' m-2'>
            <span className='font-bold'>Games</span> 🎮 I love playing games
            with friends in my downtime. Currently playing: Resident evil, Need
            for speed, God of war, and Last of us. I also enjoy playing board
            games!
          </li>
          <li className=' m-2'>
            <span className='font-bold'>Music</span> 🎵 I like Eastren classical
            music and my favorite artist is Mehdi Hassan, Nustrat Fateh ali
            khan. I have a very good vocal as well and I love to sing.
          </li>
          <li className=' m-2'>
            <span className='font-bold'>Nature</span> ⛰️ I Love to be in
            mountain and enjoy the beauty of nature. I have been in swedish
            mountains many times and I love to go there again.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default about;

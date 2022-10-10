import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Divide as Hamburger } from 'hamburger-react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  //   const [navColor, setNavColor] = useState('transparent');
  //   const [textColor, setTextColor] = useState('white');

  const toggle = () => {
    setOpen(!isOpen);
  };

  //   useEffect(() => {
  //     const changeColor = () => {
  //       if (window.scrollY >= 90) {
  //         setNavColor('#FFFFFF');
  //         setTextColor('#292929');
  //       } else {
  //         setNavColor('transparent');
  //         setTextColor('#FFFFFF');
  //       }
  //     };
  //     window.addEventListener('scroll', changeColor);
  //   }, []);

  return (
    <div
      //   style={{ backgroundColor: `${navColor}` }}
      className='  w-full   ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-[#292929]'>
        <Link href='/'>
          <Image
            src='/logo.png'
            width={70}
            height={70}
            className='cursor-pointer'
          />
        </Link>
        <ul className='hidden sm:flex '>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/'>Home</Link>
          </li>

          <li className='p-4  hover:text-blue-500'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4  hover:text-blue-500'>
            <Link href='/work'>Work</Link>
          </li>

          <li className='p-4  hover:text-blue-500'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        {/* mobile hem menu */}
        <div
          onClick={toggle}
          className='block cursor-pointer sm:hidden z-[999]'
        >
          {<Hamburger toggled={isOpen} toggle={setOpen} />}
        </div>
        {/* mobile menu */}
        <div
          className={
            isOpen
              ? 'sm:hidden bg-gray-500 absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center  w-full h-screen text-center ease-in duration-300 z-10'
              : 'sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center  w-full h-screen  text-blue-500 text-center ease-in duration-300 z-10'
          }
        >
          <ul className=''>
            <li
              onClick={toggle}
              className='p-4 text-4xl text-blue-500  hover:text-blue-600'
            >
              <Link href='/'>Home</Link>
            </li>
            <li
              onClick={toggle}
              className='p-4 text-4xl  text-blue-500  hover:text-blue-600'
            >
              <Link href='/about'>About</Link>
            </li>
            <li
              onClick={toggle}
              className='p-4 text-4xl  text-blue-500  hover:text-blue-600'
            >
              <Link href='/work'>Work</Link>
            </li>
            <li
              onClick={toggle}
              className='p-4 text-4xl  text-blue-500  hover:text-blue-600'
            >
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

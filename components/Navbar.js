import React, { useState } from 'react';
import Link from 'next/link';
import { Divide as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-[#292929]'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          width={90}
          height={90}
          className='cursor-pointer '
          objectFit='contain'
        />
      </Link>

      <ul className='hidden sm:flex gap-8'>
        <li
          className={
            router.pathname == '/'
              ? 'border-b-4 border-blue-500 text-blue-500 text-lg'
              : 'text-lg hover:text-blue-500'
          }
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className={
            router.pathname == '/work'
              ? 'border-b-4 border-blue-500 text-blue-500 text-lg'
              : 'text-lg hover:text-blue-500'
          }
        >
          <Link href='/work'>Work</Link>
        </li>

        <li
          className={
            router.pathname == '/about'
              ? 'border-b-4 border-blue-500 text-blue-500 text-lg'
              : 'text-lg hover:text-blue-500'
          }
        >
          <Link href='/about'>About</Link>
        </li>
      </ul>

      {/* mobile hem menu */}
      <div onClick={toggle} className='block cursor-pointer sm:hidden z-[999]'>
        {<Hamburger toggled={isOpen} toggle={setOpen} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          isOpen
            ? 'sm:hidden bg-white absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center  w-full h-screen text-center ease-in duration-300 z-10'
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
            <Link href='/work'>Work</Link>
          </li>
          <li
            onClick={toggle}
            className='p-4 text-4xl  text-blue-500  hover:text-blue-600'
          >
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

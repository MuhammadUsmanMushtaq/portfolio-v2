import React, { useState } from 'react';
import Link from 'next/link';
import { Divide as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyLogo = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image
        src='/images/logo.png'
        width={80}
        height={80}
        className='cursor-pointer '
        objectFit='contain'
      />
    </a>
  );
});

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-[#292929]'>
      <Link href='/'>
        <MyLogo />
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
      <div
        onClick={toggle}
        className='text-blue-500 block cursor-pointer sm:hidden z-[999]'
      >
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

// block md:inline text-center px-4 py-3 uppercase tracking-wider rounded border-2 border-blue-500 hover:bg-blue-500 text-blue-500 md:hover:text-white font-bold mb-2 md:mr-2

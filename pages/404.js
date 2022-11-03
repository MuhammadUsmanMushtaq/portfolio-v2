import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className=' flex flex-col gap-4 text-center p-12 '>
      <h1 className='text-4xl'>Oppsss </h1>
      <h2 className='text-2xl'>Something went wrong</h2>
      <p>
        Go back to the
        <Link href='/'>
          <a className='flex justify-center text-blue-600'>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

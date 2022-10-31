import data from '../../data/data.json';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div className='p-6  m-auto  max-w-[1240px]'>
      <h1 className='text-3xl md:text-4xl max-w-[1240px] m-auto text-center pb-10 '>
        My Work
      </h1>
      {data.map((project) => (
        <div className='flex justify-center items-center flex-wrap md:flex-nowrap drop-shadow  bg-gray-50 rounded max-w-[1240px] m-auto p-6 mb-6'>
          <div className=''>
            <Image
              src={project.image}
              alt='fakeibdb'
              width={360}
              height={360}
              objectFit='contain'
            />
          </div>
          <div className='md:pl-6 '>
            <h2 className='text-2xl font-bold'>{project.title}</h2>
            <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
              {project.description}
            </p>
            <button className='px-8 py-3 border-solid border-2 rounded border-blue-600 font-bold text-blue-600 hover:bg-blue-600 hover:text-[#FFF]'>
              <Link href={'/work/' + project.id} key={project.id}>
                Read more
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;

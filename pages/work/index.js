import data from '../../data/data.json';
import Image from 'next/image';
import Link from 'next/link';

const Work = () => {
  return (
    <div className='p-4 md:mt-12 max-w-[1240px] m-auto'>
      <h1 className='text-3xl md:text-4xl font-bold text-center pb-10 '>
        My Work
      </h1>
      {data.map((project) => (
        <div
          key={project.id}
          className='flex justify-center items-center flex-wrap md:flex-nowrap drop-shadow  bg-gray-50 rounded max-w-[1240px]  p-6 mb-6'
        >
          <Image
            src={project.image}
            alt='image'
            width={380}
            height={340}
            objectFit='contain'
          />

          <div className='pt-4 md:pt-0 md:pl-6 '>
            <h2 className='text-2xl font-bold uppercase'>{project.title}</h2>
            <p className='text-xl my-4 md:w-[400px] lg:w-[600px]'>
              {project.description}
            </p>
            <button className='px-6 py-4 uppercase tracking-wider rounded m-auto font-bold  bg-blue-500 hover:bg-blue-600 text-[#FFF]'>
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

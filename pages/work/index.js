import data from '../../data/data.json';
import Image from 'next/image';
import Link from 'next/link';
import Transitions from '../../components/Transitions';

const Work = () => {
  return (
    <div className='p-4 md:mt-12 max-w-[1240px] m-auto'>
      <h1 className='text-3xl md:text-4xl font-bold text-center pb-10 '>
        My Work
      </h1>
      <Transitions>
        {data.map((project) => (
          <div
            key={project.id}
            className='sm:flex sm:justify-center sm:items-center sm:flex-nowrap  sm:gap-6 drop-shadow  bg-gray-50 rounded max-w-[1240px] p-6 md:p-4 mb-6'
          >
            <div>
              <Image
                src={project.image}
                alt='project image'
                width={380}
                height={340}
                loading='lazy'
                objectFit='contain'
                blurDataURL={project.image}
                placeholder='blur'
                className='scale-100 hover:scale-105 transition duration-500 ease-in-out'
              />
            </div>

            <div className='pt-4 md:pt-0 md:pl-6 '>
              <h2 className='text-2xl font-bold uppercase'>{project.title}</h2>
              <p className='text-lg  pb-6 md:pt-2 sm:w-[380px] lg:w-[600px]'>
                {project.description}
              </p>

              <Link href={'/work/' + project.id} key={project.id}>
                <a className='block sm:inline text-center px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-[#FFF]'>
                  Read more
                </a>
              </Link>
            </div>
          </div>
        ))}
      </Transitions>
    </div>
  );
};

export default Work;

import data from '../../data/data.json';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const projects = data.find((project) => project.id.toString() === id);
  return {
    props: { project: projects },
  };
};

const Details = ({ project }) => {
  return (
    <div className='m-auto p-4  '>
      <h1 className='text-4xl  m-auto text-center pb-10 uppercase'>
        {project.title}
      </h1>
      <div className='flex justify-center items-center flex-wrap drop-shadow  bg-black rounded max-w-[1240px] m-auto p-6 mb-6'>
        <div className=' '>
          <Image
            src={project.image}
            alt='image'
            width={800}
            height={600}
            objectFit='contain'
          />
        </div>
      </div>

      <h1 className='text-3xl md:text-4xl py-6 text-center'>
        Project Overview
      </h1>
      <div className='flex flex-col  max-w-[800px] m-auto  md:p-0'>
        <h2 className=' py-2 text-1xl uppercase tracking-wider font-bold'>
          challenge
        </h2>
        <p className='text-xl tracking-wider leading-loose mb-4'>
          {project.challenge}
        </p>

        <h2 className='py-2 text-1xl uppercase tracking-wider font-bold '>
          solution
        </h2>
        <p className='text-xl tracking-wider leading-loose mb-4'>
          {project.solution}
        </p>

        <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
          tools
        </h2>

        <p className=' md:w-[800px] tracking-wider leading-loose mb-4 uppercase'>
          {project.tools}
        </p>
        <div className=' flex justify-start items-center mb-4 '>
          <Link href={project.github}>
            <a
              target='_blank'
              className='w-[120px] text-center px-4 py-2 uppercase tracking-wider rounded bg-blue-500 hover:bg-blue-600 text-[#FFF] mr-4'
            >
              github
            </a>
          </Link>
          <Link href={project.live}>
            <a
              target='_blank'
              className='w-[120px] text-center px-4 py-2 uppercase tracking-wider rounded bg-blue-500 hover:bg-blue-600 text-[#FFF]'
            >
              Live
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

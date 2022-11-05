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
    <div className='m-auto p-4 md:mt-12 '>
      <h1 className='text-4xl m-auto text-center pb-10 uppercase'>
        {project.title}
      </h1>
      <div className='flex justify-center items-center flex-wrap drop-shadow  bg-black rounded max-w-[1240px] m-auto p-6 mb-6'>
        <div className=' '>
          <Image
            src={project.image}
            alt='project image'
            width={800}
            height={600}
            objectFit='contain'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADA...'
            placeholder='blur'
            loading='lazy'
          />
        </div>
      </div>

      {/* <h1 className='text-3xl md:text-4xl py-6 text-center'>
        Project Overview
      </h1> */}
      <div className='flex flex-col  max-w-[800px] m-auto  md:p-0'>
        <h2 className=' py-2 text-1xl uppercase tracking-wider font-bold'>
          Details
        </h2>
        <p className='text-lg tracking-wider mb-4'>{project.details}</p>

        <h2 className='py-2 text-1xl uppercase tracking-wider font-bold'>
          tools
        </h2>

        <p className=' md:w-[800px] tracking-wider mb-4 uppercase'>
          {project.tools}
        </p>
        <div className='mt-1'>
          {project.github === '' ? null : (
            <Link href={project.github}>
              <a
                target='_blank'
                className=' block md:inline text-center  text-blue-500 tracking-wider font-bold pb-2 md:mr-4'
              >
                Link to github &#10132;
              </a>
            </Link>
          )}

          {project.live === '' ? null : (
            <Link href={project.live}>
              <a
                target='_blank'
                className='block md:inline text-center text-blue-500 tracking-wider pt-2 font-bold'
              >
                Link to live demo &#10132;
              </a>
            </Link>
          )}
        </div>

        <div className='inline my-10 m-auto scale-100 hover:scale-105 transition duration-500 ease-in-out'>
          <Link href='/work'>
            <a className='text-lg text-center underline text-blue-600'>
              Back to work
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;

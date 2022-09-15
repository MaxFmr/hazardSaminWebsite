import Image from 'next/image';

function ProjectBanner(props) {
  const { title, excerpt, image } = props;

  return (
    <div className='project-banner relative'>
      <div className=' w-full lg:h-[980px] h-[550px] before:absolute before:bg-black before:opacity-10 before:w-full before:h-full before:z-[1]'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          quality={70}
        />
      </div>
      <div className='container'>
        <div className='content absolute top-1/2 transform -translate-y-1/2 z-[1]'>
          <div className='inner-content relative z-[1]'>
            <span className='text-[18px] leading-[29px] text-white uppercase md:max-w-[225px] block mb-[30px]'>
              {excerpt}
            </span>
            <h2 className='md:text-[80px] lm:text-[45px] text-[36px] md:leading-[90px] text-white md:max-w-[770px]'>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner;

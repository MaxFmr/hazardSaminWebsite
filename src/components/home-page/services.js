import Link from 'next/link';
import Image from 'next/image';
import * as AiIcons from 'react-icons/ai';

function Services({ services }) {
  return (
    <div className='service-area md:pt-160 pt-[60px] relative before:bg-pattern-1 before:absolute before:h-[336px] before:w-[336px] before:top-[170px] before:left-[-168px]'>
      <div className='container max-w-full lg:pl-[70px] lg:pr-0'>
        <div className='lg:grid lg:grid-cols-12 flex flex-col-reverse'>
          <div className='lg:col-span-6 xl:mr-[140px] lg:mr-[40px] max-md:pt-[50px]'>
            <div className='service-content xl:w-[490px] w-full ml-auto'>
              <span className='sub-title text-secondary text-[14px] leading-[32px] uppercase mb-[25px] block'>
                Notre métier
              </span>
              <h2 className='title text-black lm:text-[42px] lm:leading-[50px] text-[32px] mb-[60px]'>
                Les meilleurs solutions pour
                <br /> votre intérieur.
              </h2>
              <div className='fixed-md:grid fixed-md:grid-cols-2 grid max-md:gap-[25px]'>
                {services?.map((service) => {
                  const Icon = AiIcons[service?.icon];
                  return (
                    <div className='service-box' key={service?.title}>
                      <div className='service-box-inner'>
                        <div className='service-list'>
                          <div className='icon'>
                            <Icon />
                          </div>
                          <div className='content'>
                            <h3 className='title'>
                              <Link href={service?.path}>
                                <a className='hover:underline'>
                                  {service?.title}
                                </a>
                              </Link>
                            </h3>
                            <p className='desc'>{service?.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='lg:col-span-6 mr-10  self-end '>
            <div className='service-image flex justify-end w-full lg:h-full relative'>
              <video
                src='https://www.maximekerlidou.fr/videos/samin/video.mp4'
                controls
                className='object-cover self-center h-[480px] '
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

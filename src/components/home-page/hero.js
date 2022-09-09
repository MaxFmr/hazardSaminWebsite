import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import * as FaIcons from 'react-icons/fa';
import BigLogo from './bigLogo';

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Hero({ heroItems }) {
  const heroImage = `relative w-full h-[725px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`;
  const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-1/2 transform translate-y-[-50%] z-[2]`;
  return (
    <>
      <Swiper
        className='hero-area'
        speed={1000}
        pagination={{ clickable: true, type: 'bullets' }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}>
        {heroItems?.map((heroItem, i) => {
          const TwitterIcon = FaIcons[heroItem?.twitterIcon];
          const FacebookIcon = FaIcons[heroItem?.facebookIcon];
          const GoogleIcon = FaIcons[heroItem?.googleIcon];
          return (
            <SwiperSlide className='hero-item' key={i}>
              <div className={heroImage}>
                <video
                  src='https://media.istockphoto.com/videos/painter-painting-a-ceiling-video-id1311116699'
                  muted
                  loop
                  autoPlay
                  style={{
                    height: '100%',
                    objectFit: 'cover',
                    width: '100%',
                  }}></video>
              </div>
              <div className='container custom-container'>
                <div className={heroContent}>
                  <div className='hero-inner grid grid-cols-12'>
                    <div className='hero-year col-span-2 text-white md:block hidden'>
                      <div className='social-holder flex flex-col justify-between h-full'>
                        <ul className='social-box mb-[-140px]'>
                          <li className='mb-[25px]'></li>
                        </ul>
                      </div>
                    </div>
                    <div className='md:col-span-10 col-span-12'>
                      <div
                        className='text-[18px] leading-8 tracking-[5px] text-white uppercase md:mb-[30px] mb-[10px] block hero-slidedown delay-300 mt-16'
                        dangerouslySetInnerHTML={{
                          __html: heroItem?.heroCategory,
                        }}
                      />
                      <h2
                        className='md:text-[70px] md:leading-[100px] text-[30px] leading-[1.2] text-[#1F71B1]  mb-[20px] hero-slidedown delay-[600ms] '
                        dangerouslySetInnerHTML={{
                          __html: heroItem?.heroTitle1,
                        }}></h2>
                      <h2
                        className='md:text-[70px] md:leading-[100px] text-[30px] leading-[1.2] text-[#A9C321] mb-[20px] hero-slidedown delay-[600ms]'
                        dangerouslySetInnerHTML={{
                          __html: heroItem?.heroTitle2,
                        }}></h2>
                      <h2
                        className='md:text-[70px] md:leading-[100px] text-[30px] leading-[1.2] text-[#C31772] mb-[20px] hero-slidedown delay-[600ms]'
                        dangerouslySetInnerHTML={{
                          __html: heroItem?.heroTitle3,
                        }}></h2>
                      <h2
                        className='md:text-[70px] md:leading-[100px] text-[30px] leading-[1.2] text-[#9D2679] mb-[20px] hero-slidedown delay-[600ms]'
                        dangerouslySetInnerHTML={{
                          __html: heroItem?.heroTitle4,
                        }}></h2>
                      <div className='hero-slidedown delay-[1200ms] mt-20'>
                        <Link href='/about'>
                          <a className='boxed-btn text-[18px] leading-[30px]'>
                            En savoir plus
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='info text-white hover:text-primary transition-all text-[14px] uppercase absolute bottom-[100px] sm:right-[70px] right-auto z-[2] invisible lg:visible'>
                  <Link href='email:hazar.samin@gmail.com'>
                    {heroItem?.heroContactInfo}
                  </Link>
                </div>
              </div>
              <div className='mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2'>
                <Link href='#about' passHref>
                  <ul className='mouse-btn-down'>
                    <li className='chevron animate-move'></li>
                    <li className='chevron animate-move2'></li>
                    <li className='chevron animate-move3'></li>
                  </ul>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Hero;

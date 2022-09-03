import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { useState, useEffect, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination, Autoplay]);
function Testimonial({ testimonialItems }) {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper) {
      console.log('Swiper instance:', swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);
  return (
    <div className='testimonial-area bg-azure'>
      <div className='container'>
        <div className='grid-cols-1'>
          <div className='flex items-center justify-between mb-[65px]'>
            <h2 className='testimonial-title'>+600 clients satisfaits</h2>
            <div className='swiper-button-wrap flex cursor-pointer text-[#999999] text-[30px]'>
              <div
                className='swiper-button transition-all hover:text-black mr-[10px]'
                ref={prevRef}>
                <AiIcons.AiOutlineLeft />
              </div>
              <div
                className='swiper-button transition-all hover:text-black'
                ref={nextRef}>
                <AiIcons.AiOutlineRight />
              </div>
            </div>
          </div>
          <Swiper
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            onSwiper={setSwiper}
            updateOnWindowResize
            observer
            observeParents
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
            }}>
            {testimonialItems?.map((testimonialItem, i) => {
              const Icon = FaIcons[testimonialItem?.quote];
              return (
                <SwiperSlide key={i}>
                  <div className='testimonial-block'>
                    <div className='inner-box relative before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-primary before:transition-all before:duration-500 before:scale-0 before:hover:scale-100'>
                      <div className='quote flex justify-end text-primary text-[30px] leading-[60px] py-[10px]'>
                        <Icon />
                      </div>
                      <h2 className='testimonial-author'>
                        {testimonialItem?.authorName}
                        <span className='occupation'>
                          {testimonialItem?.authorOccupation}
                        </span>
                      </h2>
                      <p className='testimonial-feedback'>
                        {testimonialItem?.excerpt}
                      </p>
                      <div style={{ marginTop: '10px' }}>
                        {' '}
                        <a href={testimonialItem?.link} target='_blank'>
                          Retrouver le commentaire sur Google
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

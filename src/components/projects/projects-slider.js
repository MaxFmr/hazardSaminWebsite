import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import ProjectItem from './project-item';

SwiperCore.use([Pagination, Autoplay]);

function ProjectSlider(props) {
  const { projects } = props;

  return (
    <div className=''>
      <Swiper
        pagination={{ clickable: true, type: 'bullets' }}
        spaceBetween={5}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}>
        <div className='border-2'>
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <ProjectItem project={project} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectSlider;

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import ProjectItem from './project-item';

SwiperCore.use([Pagination, Autoplay]);

function ProjectSlider(props) {
    const { projects } = props;

    return (
        <Swiper
            pagination={{ clickable: true, type: 'bullets' }}
            spaceBetween={5}
            breakpoints={{
                1200: {
                    slidesPerView: 4,
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
            }}
        >
            {projects.map((project) => (
                <SwiperSlide key={project.slug}>
                    <ProjectItem project={project} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ProjectSlider;

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import PostItem from './post-item';

SwiperCore.use([Pagination, Autoplay]);

function PostSlider(props) {
    const { posts } = props;

    return (
        <Swiper
            pagination={false}
            spaceBetween={25}
            slidesPerView={3}
            draggable={false}
            simulateTouch={false}
            navigation={false}
            breakpoints={{
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
            {posts.map((posts) => (
                <SwiperSlide key={posts.slug}>
                    <PostItem posts={posts} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PostSlider;

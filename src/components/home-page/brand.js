import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

SwiperCore.use([Pagination, Autoplay]);
function Brand({ brandItems }) {
  const brandImage = `relative opacity-40 grayscale-[100px] transition duration-500 hover:grayscale-[0] hover:opacity-100`;
  return (
    <div className="brand-area bg-azure">
      <div className="container">
        <div className="columns-1 border-[#dfdfdf] border-b md:py-[115px] py-[45px]">
          <Swiper
            // autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={false}
            spaceBetween={30}
            loop={false}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              576: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
            }}
          >
            {brandItems?.map((brandItem, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="brand-item">
                    <div className={brandImage}>
                      <Link href="#">
                        <a>
                          <Image
                            src={brandItem?.clientimage}
                            alt={brandItem?.title}
                            width={210}
                            height={90}
                            layout="responsive"
                            quality={70}
                          />
                        </a>
                      </Link>
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

export default Brand;

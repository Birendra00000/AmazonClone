// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <div className="h-[500px] bg-white">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide className="h-50">
            <img src="../../images/carousel_1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../images/carousel_2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="bg-black">
            <video controls muted="muted">
              <source src="../../images/carousel_vid.mp4" type="video/mp4" />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../images/carousel_3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../images/carousel_4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../images/carousel_5.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

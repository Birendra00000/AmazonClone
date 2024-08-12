import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const ProductCarousel = () => {
  return (
    <div className="bg-white m-3 p-3">
      <div className="text-2xl font-semibold mb-4">Best Sellers</div>
      <Swiper
        slidesPerView={1} // Default to 1 slide per view
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // Adjust slides per view based on screen size
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1536: { slidesPerView: 6 },
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <Link to={`/product/${i}`}>
              <img
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
                className="w-full h-auto object-cover rounded-md"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, createSearchParams } from "react-router-dom";

const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchitem: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white p-3 mx-3">
      <div className="text-2xl font-semibold mb-4">Shop by Category</div>
      <Swiper
        slidesPerView={2} // Default to 2 slides per view
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2, // 2 slides per view on very small screens
          },
          640: {
            slidesPerView: 3, // 3 slides per view on small screens
          },
          768: {
            slidesPerView: 4, // 4 slides per view on medium screens
          },
          1024: {
            slidesPerView: 5, // 5 slides per view on large screens
          },
          1280: {
            slidesPerView: 6, // 6 slides per view on extra-large screens
          },
        }}
      >
        <SwiperSlide
          onClick={() => searchCategory("Deals")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_0.jpg"}
            alt="Deal category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Amazon")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_1.jpg"}
            alt="Amazon category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Fashion")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_2.jpg"}
            alt="Fashion category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Computers")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_3.jpg"}
            alt="Computers category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Home")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_4.jpg"}
            alt="Home category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Mobiles")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_5.jpg"}
            alt="Mobiles category"
            className="w-auto h-[300px] object-cover rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

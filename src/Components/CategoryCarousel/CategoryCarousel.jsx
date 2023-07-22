import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./index.css";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate, createSearchParams } from "react-router-dom";

const CarouselCategory = () => {
  const Navigate = useNavigate();
  const searchCategory = (category) => {
    Navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchitem: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide
          onClick={() => searchCategory("Deals")}
          className=" cursor-pointer"
        >
          <img
            src={"../images/category_0.jpg"}
            alt="Deal category"
            className="abc"
          />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Amazon")}
          className="cursor-pointer"
        >
          <img
            src={"../images/category_1.jpg"}
            alt="Amazon category"
            className="abc"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer"
          onClick={() => searchCategory("Fashion")}
        >
          <img
            src={"../images/category_2.jpg"}
            alt="Fashion category"
            className="abc"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer"
          onClick={() => searchCategory("Computers")}
        >
          <img
            src={"../images/category_3.jpg"}
            alt="Computers category"
            className="abc"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer"
          onClick={() => searchCategory("Home")}
        >
          <img
            src={"../images/category_4.jpg"}
            alt="Home category"
            className="abc"
          />
        </SwiperSlide>
        <SwiperSlide
          className="cursor-pointer"
          onClick={() => searchCategory("Mobiles")}
        >
          <img
            src={"../images/category_5.jpg"}
            alt="Mobiles category"
            className="abc"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;

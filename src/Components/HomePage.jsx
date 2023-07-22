import React from "react";
import Carousel from "./Carousel/Craousel";
import HomePageCard from "./HomePageCard/HomePageCard";
import CategoryCarousel from "./CategoryCarousel/CategoryCarousel";
import ProductCatourel from "./ProductCarousel/ProductCarousel";

const HomePage = () => {
  return (
    <div className="main--app--wrapper bg-amazonclone-background ">
      <div className="secons--wrapper "></div>
      <Carousel />
      <div className="grid grid-cols-3 xl:grid-cols-4">
        <HomePageCard
          title={"we have a suprise for you"}
          img={"../images/home_grid_1.jpg"}
          link={"see terms and conditions"}
        />
        <HomePageCard
          title={"Watched the Rings of Power "}
          img={"../images/home_grid_2.jpg"}
          link={"start streaming now "}
        />
        <HomePageCard
          title={"Unlimited streaming"}
          img={"../images/home_grid_3.jpg"}
          link={"Find out more"}
        />
        <HomePageCard
          title={"More Titles to Explore"}
          img={"../images/home_grid_4.jpg"}
          link={"Browse Kindky Unlimited"}
        />
        <HomePageCard
          title={"Stop Pet Supplies"}
          img={"../images/home_grid_5.jpg"}
          link={"see more"}
        />
        <HomePageCard
          title={"Spring Sale"}
          img={"../images/home_grid_6.jpg"}
          link={"see deals"}
        />
        <HomePageCard
          title={"Echo buds"}
          img={"../images/home_grid_7.jpg"}
          link={"see more"}
        />
        <HomePageCard
          title={"Family Plan:3 months free"}
          img={"../images/home_grid_8.jpg"}
          link={"Learn more"}
        />
      </div>
      <ProductCatourel />
      <CategoryCarousel />
    </div>
  );
};

export default HomePage;

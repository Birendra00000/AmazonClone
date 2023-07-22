import React from "react";
import "./HomePageCard.css";
const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="MainCard--wapper h-[300px] z-30">
      <div className="card--title text-lg xl:text-xl ml-4 mt-4 ">{title}</div>
      <div className="card-img h-300 ml-4">
        <img src={img} alt="img" className="h-100px w-100px object-cover" />
      </div>
      <div className="card--link text-sm ml-4 text-blue-400 ">{link}</div>
    </div>
  );
};

export default HomePageCard;

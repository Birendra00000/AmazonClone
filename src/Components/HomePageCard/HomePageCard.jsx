import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="relative h-auto max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden z-30">
      <div className="text-[14px] xl:text-xl font-semibold mb-2">{title}</div>
      <div className="mb-2">
        <img
          src={img}
          alt="img"
          className="w-full h-[120px] sm:h-48 object-cover rounded-md"
        />
      </div>
      <div className="text-sm text-blue-400 hover:underline">{link}</div>
    </div>
  );
};

export default HomePageCard;

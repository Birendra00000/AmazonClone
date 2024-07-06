import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const CategoryItems = () => {
  return (
    <div>
      <div>
        <p>Shop By Category</p>
      </div>
      <div>
        <button>
          <FaLessThan />
        </button>
        <button>
          <FaGreaterThan />
        </button>
        <div className="flex w-full justify-center bg-white">
          {" "}
          <div className="flex w-[90%] overflow-x-hidden scroll-auto">
            <div className="min-w-[200px] h-[150px] ">
              <img
                src={"../images/category1.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category2.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category3.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category4.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category5.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category6.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category1.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category2.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category3.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category4.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category5.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>{" "}
            <div className="min-w-[200px] h-[150px]">
              <img
                src={"../images/category6.png"}
                className="min-w-[200px] h-[150px] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;

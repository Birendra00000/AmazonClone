import React from "react";
import ProductBadge from "../ProductBadge/ProductBadge";
import ProductRating from "../ProductRating/ProductRating";
import { GB_CURRENCY } from "../../utilities/Api_Url";

const ProductDetails = ({ Product, ratings }) => {
  return (
    <div className="mr-4 ml-4  mt-4 border-b-2 border-grey-500 pb-4">
      <div className="text-xl xl:2xl font-semibold mb-1">{Product.title}</div>
      <div className="text-sm xl:base mb-1 ">
        by <span className="text-blue-400">{Product.brand}</span>
      </div>
      {ratings && (
        <div className="text-sm xl:base  font-light  mb-1">
          <ProductRating
            avgRating={Product.avgRating}
            ratings={Product.Ratings}
          />
        </div>
      )}
      <div className="text-sm xl:sm font-bold   mb-1">{Product.attribute}</div>
      <div className="p-2">{GB_CURRENCY.format(Product.price)}</div>
      <div>
        <ProductBadge badge={Product.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;

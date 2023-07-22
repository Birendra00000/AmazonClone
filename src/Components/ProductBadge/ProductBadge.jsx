import React from "react";

const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <span className="text-sm bg-slate-700 text-white p-2">
        Amazon's
        <span className="text-orange-500"> Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <span className="text-sm bg-orange-600 text-white p-2">
        #1 Best Seller
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="text-sm bg-orange-600 text-white p-2">
        Limited Time Deal
      </span>
    );
  }

  return <div></div>;
};

export default ProductBadge;

import React from "react";
import { ImSearch } from "react-icons/im";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiCall } from "../../utilities/ApiCall";
import { GB_CURRENCY } from "../../utilities/Api_Url";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [Product, setProducts] = useState("");

  const getSearchResults = () => {
    const searchitem = searchParams.get("searchitem");
    const category = searchParams.get("category");

    ApiCall(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchitem) {
        const results = categoryResults.filter((Product) =>
          Product.title.toLowerCase().includes(searchitem.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="">
      {Product &&
        Product.map((Product, key) => {
          return (
            <Link key={key} to={`/product/${Product.id}`}>
              <div className="">
                <div className="">
                  <img
                    className="m-auto"
                    src={Product.image_small}
                    alt="Search result product"
                  />
                </div>
                <div className=" ">
                  <div className="">
                    <ProductDetails Product={Product} ratings={true} />
                    <div className="">{GB_CURRENCY.format(Product.price)}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResult;

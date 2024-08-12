import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiCall } from "../../utilities/ApiCall";
import ProductDetails from "../ProductDetails/ProductDetails";
import { GB_CURRENCY } from "../../utilities/Api_Url";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    ApiCall(`data/products.json`).then((productsResult) => {
      setProduct(productsResult[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((Product.quantity = quantity));
    return Product;
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!Product?.title) return <h1>Loading...</h1>;

  return (
    Product && (
      <div className="h-screen bg-amazonclone-background p-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 w-full flex justify-center ">
              <img
                src={`${Product.image}`}
                alt={Product.title}
                className="w-auto h-[300px] object-cover rounded-md"
              />
            </div>
            <div className="bg-white p-6 col-span-1 md:col-span-2 lg:col-span-1">
              <ProductDetails Product={Product} ratings={true} />
              <div className="mt-4 text-lg">{Product.description}</div>
            </div>

            <div className="bg-white p-5">
              <div className="text-lg xl:text-xl font-bold text-right text-red-600">
                {GB_CURRENCY.format(Product.price)}
              </div>
              <div className="text-base text-right text-red-400">
                RRP:
                <span className="line-through">
                  {GB_CURRENCY.format(Product.oldPrice)}
                </span>
              </div>
              <div className="text-base xl:text-base text-blue-700 mt-1">
                Free Returns
              </div>
              <div className="text-base xl:text-base text-blue-700 mt-1">
                Free Delivery
              </div>
              <div className="text-base xl:text-base text-green-800 mt-1">
                In Stock
              </div>
              <div className="text-lg xl:text-lg mt-1 text-gray-500 ">
                Quantity:
                <select
                  className="p-1 bg-white border rounded-md focus:border-indigo-600 ml-1"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to="/checkout">
                <div className="button">
                  <button
                    className="mt-3 w-full text-lg bg-red-800 text-white p-2 border rounded-md hover:bg-green-800"
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;

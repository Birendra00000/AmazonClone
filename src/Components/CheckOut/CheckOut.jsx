import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { GB_CURRENCY } from "../../utilities/Api_Url";
import {
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "../../Redux/CartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );

  return (
    <div className="bg-amazonclone-background min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {/* Products */}
          <div className="col-span-1 md:col-span-6 bg-white p-4 rounded-lg shadow-md">
            <div className="text-xl md:text-2xl font-semibold mb-4">
              Shopping Cart
            </div>
            {products.map((Product) => (
              <div
                key={Product.id}
                className="mb-4 border-b border-orange-500 p-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-2">
                    <Link to={`/product/${Product.id}`}>
                      <img
                        className="w-auto h-[250px] object-cover rounded-md"
                        src={Product.image_small}
                        alt="Checkout product"
                      />
                    </Link>
                  </div>
                  <div className="md:col-span-6">
                    <div className="font-medium text-gray-900">
                      <Link to={`/product/${Product.id}`}>
                        <ProductDetails Product={Product} ratings={false} />
                      </Link>
                    </div>
                    <button
                      className="text-xs md:text-sm font-semibold rounded text-white mt-2 mb-1 cursor-pointer px-3 py-1 bg-red-500 hover:bg-red-600"
                      onClick={() => dispatch(removeFromCart(Product.id))}
                    >
                      Delete
                    </button>
                    <div className="grid grid-cols-3 w-20 text-center mt-2">
                      <div
                        className="text-xl bg-gray-400 rounded cursor-pointer"
                        onClick={() => dispatch(decrementInCart(Product.id))}
                      >
                        -
                      </div>
                      <div className="text-lg bg-gray-200">
                        {Product.quantity}
                      </div>
                      <div
                        className="text-xl bg-gray-400 rounded cursor-pointer"
                        onClick={() => dispatch(incrementInCart(Product.id))}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 flex items-center justify-end">
                    <div className="text-lg md:text-xl font-semibold">
                      {GB_CURRENCY.format(Product.price)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-lg md:text-xl font-semibold text-right mt-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-1 md:col-span-2 bg-white rounded-lg p-4 shadow-md">
            <div className="text-sm md:text-base text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base md:text-lg mb-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

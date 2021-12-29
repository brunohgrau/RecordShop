import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cart/cartActions";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // Fetch Single Product
  const { data: product, error, isLoading } = useQuery(
    ["product", { id }],
    getProduct
  );

  // Handlers

  const addToCartHandler = () => {
    navigate({ pathname: `/cart/${id}?qty=${quantity}` });
    dispatch(addToCart(id, quantity));
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message>{error} </Message>
        ) : (
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="mb-3 text-2xl title-font text-gray-900 tracking-widest">
                  {product.artistName}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.recordName}
                </h1>
                <h3 className="mt-10 text-gray-700 text-2xl"> Track List </h3>

                <div className=" mt-2 mb-8 leading-relaxed">
                  <div>
                    <div> A1:{product.track1} </div>
                    <div> B1:{product.track2} </div>
                  </div>
                </div>
                <span
                  className={`${
                    product.count > 0 ? "text-gray-700" : "text-red-700"
                  }`}
                >
                  {product.count > 0 ? (
                    <div className="flex">
                      In Stock:
                      <div className="text-blue-400 ml-2">
                        {product.count} remaining
                      </div>
                    </div>
                  ) : (
                    <div className="text-red-400">Out of Stock </div>
                  )}
                </span>

                <div className=" flex mt-8">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {product.price}&euro;
                  </span>

                  {product.count > 0 ? (
                    <button
                      className="flex ml-auto text-white 
            bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 
            rounded"
                      onClick={addToCartHandler}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className=" cursor-not-allowed opacity-50 flex ml-auto text-white 
            bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 
            rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Product;

// console.log(`Product:${JSON.stringify(product._id)`})

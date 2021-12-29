import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import { useNavigate } from "react-router-dom";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let navigate = useNavigate();

  const onCheckoutHandler = () => {
    navigate({ pathname: `/shipping` });
  };

  return (
    <div>
      <div className="min-h-screen container mx-auto mt-10">
        <div className="md:flex shadow my-10">
          {/* Items */}
          <div className=" sm:w-full md:w-3/4  px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">
                {cartItems.reduce(
                  (acc, cartItem) => acc + cartItem.quantity,
                  0
                )}
                {} Items
              </h2>
            </div>
            <div className="hidden md:flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class=" font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.product} cartItem={cartItem} />
            ))}
          </div>

          {/*  Resumo */}
          <div className="sm:w-full md:w-1/4  px-8  py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5 ">
              <span class="font-semibold text-sm uppercase">
                {cartItems.reduce(
                  (acc, cartItem) => acc + cartItem.quantity,
                  0
                )}
                {} Items
              </span>
              <span class="font-semibold text-sm">
                {cartItems.reduce(
                  (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
                  0
                )}
                &euro;
              </span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>

            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  {cartItems.reduce(
                    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
                    0
                  ) + 10}
                  &euro;
                </span>
              </div>
              <button
                class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm 
                text-white uppercase w-full"
                onClick={onCheckoutHandler}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

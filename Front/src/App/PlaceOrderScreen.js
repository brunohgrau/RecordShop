import React, { useEffect } from "react";
import CartItem from "../Components/Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../redux/order/orderActions";
import { useNavigate } from "react-router-dom";

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 10;
  cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate({ pathname: `/order/${order._id}` });
    }
  }, [navigate, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice
      })
    );
  };

  return (
    <div>
      <div className="min-h-screen container mx-auto mt-10">
        <div className="md:flex shadow my-10">
          {/* Items */}
          <div className=" sm:w-full md:w-3/4  px-10 py-10">
            <div className=" border-b pb-8">
              <h1 class="text-gray-700 text-2xl">Shipping </h1>
              <h2 class="mt-4 text-gray-500 text-1xl">
                {cart.shippingAddress.address},{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
              </h2>
            </div>
            <div className=" border-b pb-8">
              <h1 class="text-gray-700 text-2xl">Payment Method </h1>
              <h2 class="mt-4 text-gray-500 text-1xl">{cart.paymentMethod}</h2>
            </div>
            <div className=" border-b pb-8">
              <h1 class="text-gray-700 text-2xl">Order Items</h1>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.product} cartItem={cartItem} />
              ))}
            </div>
          </div>

          {/*  Resumo */}
          <div className="sm:w-full md:w-1/4  px-8  py-10">
            <h1 class=" text-2xl border-b pb-8 text-gray-500">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5 ">
              <span class="text-sm uppercase">
                Items: {cart.itemsPrice} &euro;
              </span>
              <span class="font-semibold text-sm"></span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                Shipping: {cart.shippingPrice} &euro;
              </label>
            </div>

            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total: {cart.totalPrice}</span>
                <span></span>
              </div>
              <button
                class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm 
              text-white uppercase w-full"
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;

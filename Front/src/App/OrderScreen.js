import React, { useEffect } from "react";
import CartItem from "../Components/Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../redux/order/orderActions";
import Loader from "../Components/Loader/Loader";
import Message from "../Components/Message/Message";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log(order);

  if (!loading) {
    order.itemsPrice = order.orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);

  const payHandler = () => {
    dispatch(payOrder(id));
    navigate({ pathname: `/` });
  };

  return (
    <div>
      <div className="min-h-screen container mx-auto mt-10">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message> {error} </Message>
        ) : (
          <div className="md:flex shadow my-10">
            {/* Items */}
            <div className=" sm:w-full md:w-3/4  px-10 py-10">
              <div className=" border-b pb-8">
                <h1 className="text-gray-700 text-2xl">Order {order.id} </h1>
                <h2 className="mt-4 text-gray-500 text-1xl">
                  {order.user.name} - {order.user.email}
                </h2>
                <h2 className="mt-4 text-gray-500 text-1xl">
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </h2>
                {order.isDelivered ? (
                  <p className="mt-4 h-10 w-40 bg-blue-100 text-gray-500 text-1xl">
                    Delivered
                  </p>
                ) : (
                  <p className="mt-4 h-10 w-40 bg-red-100 text-gray-500 text-1xl">
                    Not Delivered
                  </p>
                )}
              </div>
              <div className=" border-b pb-8">
                <h1 className="text-gray-700 text-2xl">Payment Method </h1>
                <h2 className="mt-4 text-gray-500 text-1xl">
                  {order.paymentMethod}
                </h2>

                {order.isPaid ? (
                  <p className="mt-4 h-10 w-20 bg-blue-100 text-gray-500 text-1xl">
                    Paid
                  </p>
                ) : (
                  <p className="mt-4 h-10 w-20 bg-red-100 text-gray-500 text-1xl">
                    Not Paid
                  </p>
                )}
              </div>
              <div className=" border-b pb-8">
                <h1 className="text-gray-700 text-2xl">Order Items</h1>
                {order.orderItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
              </div>
            </div>

            {/*  Resumo */}
            <div className="sm:w-full md:w-1/4  px-8  py-10">
              <h1 className=" text-2xl border-b pb-8 text-gray-500">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5 ">
                <span className="text-sm uppercase">
                  Items: {order.itemsPrice} &euro;
                </span>
                <span className="font-semibold text-sm"></span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping: {order.shippingPrice} &euro;
                </label>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total: {order.totalPrice} &euro;</span>
                  <span></span>
                </div>
                <button
                  class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm 
              text-white uppercase w-full"
                  onClick={payHandler}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderScreen;

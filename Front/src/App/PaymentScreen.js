import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/vinyl.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../redux/cart/cartActions";

const PaymentScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress) {
    navigate({ pathname: `/shipping` });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate({ pathname: "/placeorder" });
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-900">
            Payment Method
          </h2>
          <div>
            <div className="mt-6 text-center">
              <input
                className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100"
                type="radio"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="text-sm font-medium ml-4">PayPal</label>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              type="submit"
              className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm 
              font-medium text-white bg-indigo-600 
              hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-indigo-500"
              onClick={submitHandler}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;

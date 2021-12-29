import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/vinyl.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../redux/cart/cartActions";

const ShippingScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        city,
        postalCode,
        country
      })
    );
    navigate({ pathname: `/payment` });
  };

  return (
    <div>
      <div className=" mt-10 bg-gray flex flex-col justify-center  px-6 lg:px-8">
        {/*  Header */}
        <div className="sm:mx-auto sm:w-full sm-max-w-md">
          <Logo className="mx-auto h-12 w-auto" alt="Logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-900">
            Shipping Details
          </h2>
        </div>

        {/* Form */}
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6  rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  for="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <div className="mt-1">
                  <input
                    id="postal code"
                    name="postal code"
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  for="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm 
                  text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;

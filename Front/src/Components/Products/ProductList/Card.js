import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartActions";

import { useNavigate } from "react-router-dom";

const Card = ({
  _id,
  artistName,
  recordName,
  label,
  price,
  imageUrl,
  trackNames
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addToCartHandler = () => {
    navigate({ pathname: `/cart/${_id}?qty=${quantity}` });
    dispatch(addToCart(_id, quantity));
  };

  return (
    <div className="flex flex-col items-center space-y-2 mb-8">
      <div className=" relative bg-gray-300 p-1 rounded-full">
        <Link
          to={`/product/${_id}`}
          className="block bg-white p-1 rounded-full 
     "
        >
          <img alt="" src={imageUrl} className="h-40 w-40 rounded-full" />
        </Link>
        <button
          className="absolute bottom-0 right-0 bg-gray-500 hover:bg-gray-600 h-10 w-10
      rounded-full text-white  font-semibold border-2 border-white
      flex justify-center items-center "
          onClick={() => addToCartHandler()}
        >
          Add
        </button>
      </div>
      <a href="#"> {artistName} </a>
      <a href="#"> {recordName} </a>
      <a href="#"> {price}&euro;</a>
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../../api";
import Card from "./Card";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";

const CardCollection = () => {
  const { data: products, error, isLoading } = useQuery(
    "products",
    getAllProducts
  );

  return (
    <div className="py-24">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div
          className="container mx-auto  md: px-12 lg:px-40  grid grid-cols-1 
          md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-8"
        >
          {products.map(({ _id, ...otherProps }) => (
            <Card key={_id} _id={_id} {...otherProps} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCollection;

import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/vinyl.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";
import { getAllProducts } from "../Components/api";
import { useQuery, useQueryClient, prefetchQuery } from "react-query";
import ProductAdminList from "../Components/Products/ProductAdminList/ProductAdminList";

const ProductListScreen = () => {
  const { data: products, error, isLoading } = useQuery(
    "products",
    getAllProducts
  );

  return (
    <section className="min-h-screen container mx-auto px-4 sm:px-8 max-w-4xl">
      <h1 className="mt-24 text-4xl text-gray-600 font-semibold text-center mb-4">
        {" "}
        Products{" "}
      </h1>
      <div className="mt-4 text-center">
        <Link
          to={"/admin/createproduct"}
          className="w-40 justify-center py-2 px-4 border border-transparent 
        rounded-md shadow-sm text-sm font-medium text-white bg-indigo-400"
        >
          Create Product
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error} </Message>
      ) : (
        <ProductAdminList products={products} />
      )}
    </section>
  );
};

export default ProductListScreen;

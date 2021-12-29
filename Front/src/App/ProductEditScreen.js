import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProduct, updateProduct } from "../Components/api";
import ProductAdminForm from "../Components/Products/ProductAdminList/ProductAdminForm";

const ProductEditScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(`Product id: ${id}`);

  // Fetch Single Product

  const { data: product, error, isLoading } = useQuery(
    ["product", { id }],
    getProduct
  );

  console.log(`Data: ${product}`);

  // Edit Single Product

  const { mutateAsync, isLoading: isMutating } = useMutation(updateProduct);

  const queryClient = useQueryClient();
  queryClient.invalidateQueries("product");
  queryClient.refetchQueries("product", { active: true });

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    navigate({ pathname: `/admin/productlist` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
        <h1 className="text-2xl mt-16 text-gray-600 font-bold">Edit Product</h1>

        <div className="flex mt-8  justify-evenly ">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message> {error.message} </Message>
          ) : (
            <ProductAdminForm
              defaultValues={product}
              onFormSubmit={onFormSubmit}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductEditScreen;

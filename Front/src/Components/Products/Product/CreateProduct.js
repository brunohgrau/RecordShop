import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import CreateProductForm from "../Product/CreateProductForm";
import { createProduct } from "../../api";

const CreateProduct = ({ defaultValues }) => {
  const navigate = useNavigate();

  // Cadastrar Compra

  const { mutateAsync, isLoading } = useMutation(createProduct);

  // Handlers

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    navigate({ pathname: `/` });
  };

  return (
    <div>
      <section className="container mx-auto px-4 sm:px-8 max-w-4xl ">
        <h1 className="text-2xl mt-16 text-gray-600 font-bold">
          Create Product
        </h1>

        <div className="flex justify-between py-3 px-2 mt-24 "></div>
        <div className="flex   justify-evenly ">
          <CreateProductForm onFormSubmit={onFormSubmit} />
        </div>
      </section>
    </div>
  );
};

export default CreateProduct;

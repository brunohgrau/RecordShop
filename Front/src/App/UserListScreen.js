import React, { useEffect } from "react";
import { ReactComponent as Logo } from "../assets/vinyl.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";
import { getAllUsers } from "../Components/api";
import { useQuery, useQueryClient, prefetchQuery } from "react-query";
import UsersList from "../Components/Users/UsersList/UsersList";

const UserListScreen = () => {
  const navigate = useNavigate();

  const { data, error, isLoading } = useQuery("users", getAllUsers);

  return (
    <section className="min-h-screen container mx-auto px-4 sm:px-8 max-w-4xl">
      <h1 className="mt-24 text-4xl text-gray-600 font-semibold text-center mb-4">
        {" "}
        Users{" "}
      </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error} </Message>
      ) : (
        <UsersList users={data} />
      )}
    </section>
  );
};

export default UserListScreen;

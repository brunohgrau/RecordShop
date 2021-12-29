import React, { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/vinyl.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../redux/user/userActions";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";

const ProfileScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate({ pathname: `/signin` });
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateUserProfile({
        id: user._id,
        name,
        email,
        password
      })
    );
    navigate({ pathname: `/` });
  };

  return (
    <div className=" mt-10 bg-gray flex flex-col justify-center  px-6 lg:px-8">
      <div className="mt-4 mb-4">
        {message && <Message> {message} </Message>}
        {error && <Message> {error} </Message>}
        {success && <Message> Profile Updated </Message>}
        {loading && <Loader />}
      </div>

      {/*  Header */}
      <div className="sm:mx-auto sm:w-full sm-max-w-md">
        <Logo className="mx-auto h-12 w-auto" alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-900">
          User Profile
        </h2>
      </div>

      {/* Form */}
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6  rounded-lg sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                for="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg
                  focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

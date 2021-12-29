import React, { useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { Link } from "react-router-dom";
import { logout } from "../../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const PrimaryNav = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="flex text-black ">
      {userInfo ? (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/profile" className="mr-5 text-blue-500 font-bold">
            {userInfo.name}
          </Link>
        </nav>
      ) : null}

      {userInfo && userInfo.isAdmin && (
        <button
          className="inline-flex mr-5 items-center bg-gray-200  border-blue-400 border-2 py-1 px-3 focus:outline-none 
        rounded text-base mt-4 md:mt-0"
          onClick={openHandler}
        >
          Options
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      )}
      {isOpen ? (
        <div className="relative mt-8">
          {/*   <!-- Menu list --> */}
          <div
            class="absolute  right-0 z-20 w-24 mt-2 overflow-hidden bg-white 
      shadow-xl  "
          >
            <Link
              to={"/admin/productlist"}
              className="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Products
            </Link>
            <Link
              to={"/admin/userlist"}
              className="block px-4 py-2 text-sm text-gray-800 border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              Users
            </Link>
          </div>
        </div>
      ) : null}

      {userInfo ? (
        <Link
          to=""
          onClick={logoutHandler}
          className="inline-flex items-center  border-blue-400 border-2  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Logout
        </Link>
      ) : (
        <Link
          to="/signin"
          className="inline-flex items-center  border-blue-400 border-2  py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Login
        </Link>
      )}

      <Link
        to="/cart/:id"
        className="inline-flex items-center py-1 px-3  text-base mt-4 md:mt-0"
      >
        <CartIcon className=" ml-2 w-6 " />
      </Link>
    </div>
  );
};

export default PrimaryNav;

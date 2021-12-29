import { FaTablet } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

const MobileMenu = ({ userInfo }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="flex flex-grow items-center md:hidden">
        <ul className="flex flex-col  list-none mr-auto">
          <li className="flex flex-col px-4  ">
            {userInfo ? (
              <Link
                to="/profile"
                className="flex  cursor-pointer  text-black
                text-sm uppercase font-bold py-4 items-center"
              >
                <span className=""> {userInfo.name} </span>
              </Link>
            ) : null}

            {userInfo ? (
              <Link
                to=""
                onClick={logoutHandler}
                className="flex  cursor-pointer  text-black
                 text-sm uppercase font-bold py-4"
              >
                <span> Logout </span>
              </Link>
            ) : (
              <Link
                to="/signin"
                className="flex  cursor-pointer  text-black
                 text-sm uppercase font-bold py-4"
              >
                <span> Login </span>
              </Link>
            )}

            <Link
              to="/cart/:id"
              className="flex  cursor-pointer  text-black
                 text-sm uppercase font-bold py-4"
            >
              <span> Card </span>
            </Link>

            {userInfo && userInfo.isAdmin && (
              <>
                <Link
                  to={"/"}
                  className="flex  cursor-pointer  text-black
                 text-sm uppercase font-bold py-4"
                >
                  <span className=""> Products </span>
                </Link>
                <Link
                  to={"/"}
                  className="flex  cursor-pointer  text-black
                 text-sm uppercase font-bold py-4"
                >
                  <span className=""> Users </span>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;

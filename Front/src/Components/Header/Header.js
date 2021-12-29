import { FaBars } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import PrimaryNav from "./PrimaryNav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <Menu>
        <nav className=" text-white bg-gray-200">
          <div className="px-6 py-4 mx-auto">
            <div
              className="flex items-center justify-between
              h-8"
            >
              <div className="flex " id="logo block">
                <Logo />
              </div>
              <nav
                className="md:ml-auto flex flex-wrap items-center text-base justify-evenly
                hidden  md:block"
                id="primary nav"
              >
                <PrimaryNav userInfo={userInfo} />
              </nav>

              <div
                class=" hidden md:block items-center 
              border-0 py-1 px-3 text-base"
              >
                {/* <Social /> */}
              </div>
              <Menu.Button>
                <button
                  className="text-black cursor-pointer text-xl leading-none px-3 py-1
                  rounded block md:hidden lg:outline-none focus:outline-none"
                  type="button"
                >
                  <FaBars />
                </button>
              </Menu.Button>
            </div>
          </div>
          <Menu.Items>
            <MobileMenu userInfo={userInfo} />
          </Menu.Items>
        </nav>
      </Menu>
    </div>
  );
};

export default Header;

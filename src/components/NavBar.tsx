import { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import UserDropdownMenu from "./UserDropdownMenu";

interface Props {}

const NavBar: FC<Props> = (props) => {
  return (
    <div className="sticky top-0 flex justify-between px-5 py-2 shadow-2xl bg-dark">
      <div className="flex">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <div className="flex items-center pl-3">
          <Link to="/" className="text-2xl font-semibold text-white">
            CORK
          </Link>
        </div>

        {/* <div className="flex items-center pl-16">
          <input
            type="text"
            className="px-2 py-1 bg-gray-600 rounded "
            placeholder="Search..."
            autoComplete="off"
          ></input>
        </div> */}
      </div>

      <div className="flex items-center space-x-5">
        <FiMail className="w-5 h-5 text-white" />
        <IoMdNotificationsOutline className="w-6 h-6 text-white" />
        <UserDropdownMenu className="flex items-center " />
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);

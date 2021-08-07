import { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import { User } from "../models/User";
import { IoMdNotificationsOutline } from "react-icons/io";

interface Props {
  user: User;
}

const NavBar: FC<Props> = ({ user }) => {
  return (
    <div className="flex justify-between px-5 py-2 bg-dark">
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
        <IoMdNotificationsOutline className="w-6 h-6 text-white" />
        <img
          src={user.profile_pic_url}
          alt="User"
          className="w-8 h-8 rounded"
        />
      </div>
    </div>
  );
};

NavBar.defaultProps = {};

export default memo(NavBar);

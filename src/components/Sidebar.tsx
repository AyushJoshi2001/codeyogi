import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="hidden min-h-screen pt-10 bg-gray-200 border-r-2 border-gray-300 lg:block w-72 ">
      <Link
        to="/dashboard"
        className="inline-block w-full p-2 my-3 font-semibold text-center bg-white rounded-lg hover:text-primary hover:bg-blue-100"
      >
        Dashboard
      </Link>
      <Link
        to="Profile"
        className="inline-block w-full p-2 my-3 font-semibold text-center bg-white rounded-lg hover:text-primary hover:bg-blue-100"
      >
        Profile
      </Link>
      <Button
        type="button"
        className="inline-block w-full my-3 font-semibold hover:bg-blue-300"
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

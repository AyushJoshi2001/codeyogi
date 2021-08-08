import { FC, memo } from "react";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="hidden min-h-screen bg-gray-200 border-r-2 border-gray-300 lg:block w-72 ">
      <Button
        type="button"
        className="my-10"
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </Button>
      This is sidebar
    </div>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);

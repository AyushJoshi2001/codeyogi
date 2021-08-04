import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import Button from "./Button/Button";

interface Props {}

const Sidebar: FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div className="min-h-screen bg-gray-400 w-72 ">
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

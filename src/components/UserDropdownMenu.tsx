import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { RiDashboardLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logout } from "../api/auth";
import AppContext from "../App.context";

interface Props {
  className?: string;
}

const DropdownMenu: FC<Props> = ({ className }) => {
  const { user } = useContext(AppContext);

  return (
    <Menu as="div" className={className}>
      <Fragment>
        <Menu.Button>
          <img
            src={user!.profile_pic_url}
            alt=""
            className="object-cover w-8 h-8 rounded"
          />
        </Menu.Button>
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Menu.Items className="absolute w-40 bg-gray-100 rounded shadow-lg top-12 right-5">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={`py-2 flex px-3 text-sm space-x-2 ${
                    active ? "text-primary" : "text-gray-800"
                  } `}
                >
                  <div className="flex items-center">
                    <FaUser className="w-4 h-4" />
                  </div>
                  <p>Profile</p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/dashboard"
                  className={`py-2 flex px-3 text-sm space-x-2 ${
                    active ? "text-primary" : "text-gray-800"
                  } `}
                >
                  <div className="flex items-center">
                    <RiDashboardLine className="w-4 h-4" />
                  </div>
                  <p>Dashboard</p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`py-2 text-sm flex px-3 space-x-2 ${
                    active ? "text-primary" : "text-gray-800"
                  } `}
                  onClick={() => {
                    logout();
                    window.location.href = "/login";
                  }}
                >
                  <div className="flex items-center">
                    <VscSignOut className="w-4 h-4" />
                  </div>
                  <p>Log Out</p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Fragment>
    </Menu>
  );
};

DropdownMenu.defaultProps = {};

export default memo(DropdownMenu);

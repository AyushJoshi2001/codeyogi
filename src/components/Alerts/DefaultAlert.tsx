import { FC, memo } from "react";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  theme?: "primary" | "dark" | "danger";
  children: string;
  className?: string;
}

const DefaultAlert: FC<Props> = ({ children, className, theme }) => {
  let iconClass = "";
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "text-primary bg-blue-200";
    iconClass = "hover:text-blue-100";
  } else if (theme === "dark") {
    themeClass = "text-dark bg-gray-200";
    iconClass = "hover:text-gray-400";
  } else {
    themeClass = "text-danger bg-red-50";
    iconClass = "hover:text-red-300";
  }

  return (
    <div
      className={
        "flex justify-between px-4 rounded-lg " + themeClass + " " + className
      }
    >
      <p>{children}</p>
      <div className="flex items-center">
        <RiCloseLine
          className={"w-5 h-5 cursor-pointer " + iconClass}
        ></RiCloseLine>
      </div>
    </div>
  );
};

DefaultAlert.defaultProps = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: "",
};

export default memo(DefaultAlert);

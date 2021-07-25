import { FC, memo } from "react";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  theme?: "primary" | "dark" | "danger";
  children: string;
  className?: string;
}

const Alert: FC<Props> = ({ children, className, theme }) => {
  let iconClass = "";
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "bg-primary";
    iconClass = "hover:text-blue-100";
  } else if (theme === "dark") {
    themeClass = "bg-dark";
    iconClass = "hover:text-gray-300";
  } else {
    themeClass = "bg-danger";
    iconClass = "hover:text-red-100";
  }

  return (
    <div
      className={
        "flex justify-between px-4 rounded-lg text-white py-2 " +
        themeClass +
        " " +
        className
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

Alert.defaultProps = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: "",
};

export default memo(Alert);

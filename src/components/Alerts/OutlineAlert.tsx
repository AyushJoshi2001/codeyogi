import { FC, memo } from "react";

interface Props {
  theme?: "primary" | "dark" | "danger";
  children: string;
  className?: string;
}

const OutlineAlert: FC<Props> = ({ children, className, theme }) => {
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "border-primary";
  } else if (theme === "dark") {
    themeClass = "border-dark";
  } else {
    themeClass = "border-danger";
  }

  return (
    <div
      className={
        "flex px-4 rounded-lg border text-gray-500 " +
        themeClass +
        " " +
        className
      }
    >
      <p>{children}</p>
    </div>
  );
};

OutlineAlert.defaultProps = {
  theme: "primary",
  children: " Lorem Ipsum is simply dummy text of the printing. ",
  className: "",
};

export default memo(OutlineAlert);

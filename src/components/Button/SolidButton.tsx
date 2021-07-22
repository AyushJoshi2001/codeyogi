import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "dark" | "danger";
  type?: "submit" | "button" | "reset" | undefined;
  children: string;
  className?: string;
}

const SolidButton: FC<Props> = ({
  theme,
  children,
  className,
  type,
  ...rest
}) => {
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "bg-primary";
  } else if (theme === "dark") {
    themeClass = "bg-dark";
  } else {
    themeClass = "bg-danger";
  }

  return (
    <button
      {...rest}
      type={type}
      className={
        "text-white shadow-xl hover:shadow-none px-5 py-2 rounded text-sm " +
        themeClass +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};

SolidButton.defaultProps = {
  theme: "primary",
  children: "Log In",
  type: "submit",
};

export default memo(SolidButton);

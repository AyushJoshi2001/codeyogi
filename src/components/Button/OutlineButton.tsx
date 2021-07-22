import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "dark" | "danger";
  type?: "submit" | "button" | "reset";
  children?: string;
  className?: string;
}

const OutlineButton: FC<Props> = ({
  theme,
  children,
  className,
  type,
  ...rest
}) => {
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "text-primary border-primary hover:bg-primary";
  } else if (theme === "dark") {
    themeClass = "text-dark border-dark hover:bg-dark";
  } else {
    themeClass = "text-danger border-danger hover:bg-danger";
  }
  return (
    <button
      {...rest}
      type={type}
      className={
        "border hover:shadow-xl px-5 py-2 rounded text-sm hover:text-white " +
        themeClass +
        " " +
        className
      }
    >
      {children}
    </button>
  );
};

OutlineButton.defaultProps = {
  theme: "primary",
  children: "Log In",
  type: "submit",
};

export default memo(OutlineButton);

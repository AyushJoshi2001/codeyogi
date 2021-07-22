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
  let themeClass = "bg-danger";
  return (
    <button
      {...rest}
      type={type}
      className={
        "text-white shadow-lg hover:shadow-none " + themeClass + " " + className
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

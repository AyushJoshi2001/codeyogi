import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={"px-5 py-2 text-sm text-white rounded bg-primary " + className}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
};

export default memo(Button);

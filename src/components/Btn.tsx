import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Btn: FC<Props> = ({ type, children, className, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        type={type}
        className={
          "px-5 py-2 text-sm text-white rounded bg-primary " + className
        }
      >
        {children}
      </button>
    </div>
  );
};

Btn.defaultProps = {};

export default memo(Btn);

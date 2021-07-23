import { InputHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type: string;
  placeholder?: string;
  className?: string;
}

const Input: FC<Props> = ({ name, type, placeholder, className, ...rest }) => {
  return (
    <input
      {...rest}
      type={type}
      name={name}
      placeholder={placeholder}
      className={
        "pb-3 border-b border-gray-300 outline-none focus:border-primary " +
        className
      }
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Input",
  className: "",
};

export default memo(Input);

import { FC, memo } from "react";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  children: string;
  className?: string;
}

const Btn: FC<Props> = (props) => {
  return (
    <div>
      <button
        type={props.type}
        className={
          "px-5 py-2 text-sm text-white rounded bg-primary " + props.className
        }
      >
        {props.children}
      </button>
    </div>
  );
};

Btn.defaultProps = {};

export default memo(Btn);

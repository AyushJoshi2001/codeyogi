import { CSSProperties } from "react";
import { FC, ImgHTMLAttributes, memo } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  className?: string;
  shape?: "square" | "circle";
  style?: CSSProperties;
}

const AVT: FC<Props> = ({ url, className, shape, ...rest }) => {
  let AvatarClass = "";
  if (shape === "square") {
    AvatarClass += "rounded-lg ";
  } else {
    AvatarClass += "rounded-full ";
  }

  return (
    <img
      src={url}
      alt="avatar"
      {...rest}
      className={"h-16 w-16 " + AvatarClass + " " + className}
    />
  );
};

AVT.defaultProps = {};

export default memo(AVT);

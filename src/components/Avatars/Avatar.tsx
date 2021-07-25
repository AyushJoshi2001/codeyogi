import { FC, ImgHTMLAttributes, memo } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  url: string;
  className?: string;
  shape: "square" | "circle";
  size: "small" | "medium" | "large";
  status: "online" | "offline" | "unknown";
}

const Avatar: FC<Props> = ({
  url,
  shape,
  size,
  status,
  className,
  ...rest
}) => {
  let AvatarClass = "";
  let statusClass = "";

  if (size === "small") {
    AvatarClass = "w-16 h-16 ";
    statusClass += "w-4 h-4 ";
  } else if (size === "large") {
    AvatarClass = "w-24 h-24 ";
    statusClass += "w-6 h-6 ";
  } else {
    AvatarClass = "w-20 h-20 ";
    statusClass += "w-5 h-5 ";
  }

  if (status === "online") {
    statusClass += "bg-green-700 border-white border-2 ";
  } else if (status === "offline") {
    statusClass += "bg-gray-400 border-white border-2 ";
  } else {
    statusClass += " ";
  }

  if (shape === "square") {
    AvatarClass += "rounded-lg ";
  } else {
    AvatarClass += "rounded-full ";
  }

  return (
    <div className="relative inline-block">
      <img
        src={url}
        alt="avatar"
        {...rest}
        className={" " + AvatarClass + " " + className}
      />
      <div
        className={"absolute bottom-0 right-0 rounded-full " + statusClass}
      ></div>
    </div>
  );
};

Avatar.defaultProps = {
  url: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  shape: "circle",
  size: "medium",
  status: "offline",
  className: " ",
};

export default memo(Avatar);

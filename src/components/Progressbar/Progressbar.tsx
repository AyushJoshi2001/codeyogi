import { FC, memo } from "react";

interface Props {
  theme?: "primary" | "dark" | "danger";
  progress: number;
  className?: string;
}

const Progressbar: FC<Props> = ({ theme, progress, className }) => {
  if (progress > 100) {
    progress = 100;
  } else if (progress < 0) {
    progress = 0;
  }

  let themeClass = "";
  if (theme === "primary") {
    themeClass = "bg-primary";
  } else if (theme === "dark") {
    themeClass = "bg-dark";
  } else {
    themeClass = "bg-danger";
  }
  return (
    <div className={"mx-5 rounded-full bg-gray-200 " + className}>
      <div
        className={"py-2 rounded-full " + themeClass}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

Progressbar.defaultProps = {
  theme: "primary",
  progress: 0,
  className: " ",
};

export default memo(Progressbar);

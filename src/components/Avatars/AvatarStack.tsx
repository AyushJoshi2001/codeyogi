import { FC, memo } from "react";
import Avt from "./Avt";

interface Props {
  users: string[];
  shape?: "square" | "circle";
  className?: string;
}

const AvatarStack: FC<Props> = ({ users, className, shape }) => {
  let extraUser = 0;
  if (users.length > 4) {
    extraUser = users.length - 4;
  }

  return (
    <div className={"relative flex " + className}>
      {users.map((url, index) => {
        let gap = index * 3;
        if (index < 4) {
          return (
            <Avt
              shape={shape}
              url={url}
              className="absolute transition duration-500 ease-in-out transform border-2 border-white shadow-lg hover:-translate-y-3 hover:shadow-none "
              style={{ left: `${gap}rem` }}
            ></Avt>
          );
        } else if (index === users.length - 1) {
          return (
            <span className="absolute px-2 py-1 text-sm bg-gray-100 rounded-full shadow-lg top-4 left-48 text-primary">
              +{extraUser} more
            </span>
          );
        }
      })}
    </div>
  );
};

AvatarStack.defaultProps = {};

export default memo(AvatarStack);

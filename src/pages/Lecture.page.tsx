import { FC, memo } from "react";

interface Props {}

const Lecture: FC<Props> = (props) => {
  return <div>This is lecture page.</div>;
};

Lecture.defaultProps = {};

export default memo(Lecture);

import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
  return (
    <div className="w-screen h-screen bg-green-500">Page is not found.</div>
  );
};

NotFound.defaultProps = {};

export default memo(NotFound);

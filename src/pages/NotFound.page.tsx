import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
  return <div>Page is not found.</div>;
};

NotFound.defaultProps = {};

export default memo(NotFound);

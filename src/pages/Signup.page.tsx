import { FC, memo } from "react";

interface Props {
}

const Signup: FC<Props> = (props) => {
  return (
    <div>
        This is signup page.
    </div>
  );
};

Signup.defaultProps = {
};

export default memo(Signup);
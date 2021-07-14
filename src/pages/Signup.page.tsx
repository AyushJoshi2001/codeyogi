import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div>
      This is signup page. Already have an account{" "}
      <Link to="/login">
        <span className="text-green-500">click here</span>
      </Link>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);

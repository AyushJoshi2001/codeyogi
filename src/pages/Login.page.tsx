import React, { memo } from "react";

interface Props {
}

const Login: React.FC<Props> = (props) => {
  return (
    <div>
        This is login page.
    </div>
  );
};

Login.defaultProps = {
};

export default memo(Login);
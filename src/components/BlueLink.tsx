import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  className?: string;
  children?: string;
}

const componentName: FC<Props> = (props) => {
  return (
    <>
      <Link className={"text-primary " + props.className} to={props.to}>
        {props.children}
      </Link>
    </>
  );
};

componentName.defaultProps = {};

export default memo(componentName);

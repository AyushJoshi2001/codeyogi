import { FC, memo, useEffect } from "react";
import hero from "../img/hero.webp";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  // console.log("AuthHero rendering...");
  useEffect(() => {
    // console.log("AuthHero rendering for the first time.");
  }, []);
  return (
    <div className="hidden w-1/2 h-screen bg-dark hideAuth:block">
      <img
        src={hero}
        alt="heroimage"
        className="object-cover w-4/5 mx-auto my-16"
      />
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);

import { FC, memo, useEffect } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero rendering...");
  useEffect(() => {
    console.log("AuthHero rendering for the first time.");
  }, []);
  return (
    <div className="w-1/2 h-screen bg-black ">
      <div className="h-screen bg-cover bg-hero"></div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);

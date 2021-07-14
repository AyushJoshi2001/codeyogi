import { FC, memo, useEffect } from "react";

interface Props {}

const AuthHero: FC<Props> = (props) => {
  console.log("AuthHero rendering...");
  useEffect(() => {
    console.log("AuthHero rendering for the first time.");
  }, []);
  return (
    <div className="w-1/2 h-screen bg-black ">
      <p className="text-white">Logo Will Go Here.</p>
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);

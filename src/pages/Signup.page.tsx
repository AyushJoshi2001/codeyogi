import { FC, memo } from "react";
import { BsToggleOn } from "react-icons/bs";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="w-1/2 ">
      <div className="py-3 mx-auto max-w-120 px-11">
        <h1 className="text-4xl font-semibold">
          Get started with a free account
        </h1>
        <p className="pt-2">
          Already have an account?{" "}
          <span className="text-primary">
            <Link to="/login">Log in</Link>
          </span>
        </p>

        <form className="pt-16">
          <div>
            <input
              type="email"
              name="email"
              className="border-b-2 border-primary"
              placeholder="Username"
            />
          </div>
          <div className="pt-10">
            <input
              type="email"
              name="email"
              className="border-b-2 border-primary"
              placeholder="Email"
            />
          </div>
          <div className="pt-10">
            <input
              type="password"
              name="password"
              className="border-b-2 border-primary"
              placeholder="Password"
            />
          </div>

          <div className="flex pt-8">
            <div className="flex items-center pr-3">
              <input type="checkbox" name="agree" />
            </div>
            <p>
              I agree to the{" "}
              <span className="text-primary">
                <Link to="/login">terms and conditions</Link>
              </span>{" "}
            </p>
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex">
              <p>Show Password</p>
              <div className="flex items-center pl-2">
                <BsToggleOn className="text-2xl" />
              </div>
            </div>
            <Btn type="submit">Get Started!</Btn>
          </div>
        </form>

        <p className="pt-24">
          © 2020 All Rights Reserved. <span className="text-primary">CORK</span>{" "}
          is a product of Designreset.{" "}
          <span className="text-primary">Cookie Preferences</span>,{" "}
          <span className="text-primary">Privacy</span>, and{" "}
          <span className="text-primary">Terms</span>.
        </p>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);

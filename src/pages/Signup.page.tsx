import { FC, memo } from "react";
import { BsToggleOn } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { SiMailDotRu } from "react-icons/si";
import BlueLink from "../components/BlueLink";
import Btn from "../components/Btn";

interface Props {}

const Signup: FC<Props> = (props) => {
  return (
    <div className="w-1/2 pt-12 mx-auto text-gray-700 font-body">
      <div className="py-3 mx-auto max-w-120 px-11">
        <h1 className="text-4xl font-medium">
          Get started with a free account
        </h1>
        <p className="pt-3 text-sm font-semibold">
          Already have an account?{" "}
          <BlueLink to="/login" className="border-b border-primary">
            Log in
          </BlueLink>
        </p>

        <form className="pt-16">
          <div className="relative">
            <label htmlFor="username" className="sr-only">
              Enter your username
            </label>
            <FaUser className="absolute text-lg text-primary" />
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="Username"
              required
            />
          </div>
          <div className="relative pt-10">
            <label htmlFor="email" className="sr-only">
              Enter your email
            </label>
            <SiMailDotRu className="absolute text-lg text-primary" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative pt-10">
            <label htmlFor="password" className="sr-only">
              Enter your password
            </label>
            <FaLock className="absolute text-lg text-primary" />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex pt-8">
            <div className="flex items-center pr-3">
              <input type="checkbox" name="agree" />
            </div>
            <p className="text-sm text-gray-400">
              I agree to the{" "}
              <BlueLink to="/login">terms and conditions</BlueLink>
            </p>
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex items-center">
              <p className="text-sm">Show Password</p>
              <div className="flex items-center pl-2">
                <BsToggleOn className="text-2xl text-primary" />
              </div>
            </div>
            <div className="flex">
              {/* {submit && (
                <div className="flex items-center pr-4">
                  <ImSpinner3 className="animate-spin" />
                </div>
              )} */}
              <Btn type="submit" className="shadow-xl hover:shadow-none">
                Get Started!
              </Btn>
            </div>
          </div>
        </form>

        <p className="pt-20 text-sm">
          © 2020 All Rights Reserved.{" "}
          <BlueLink to="/login" className="font-semibold">
            CORK
          </BlueLink>{" "}
          is a product of Designreset.{" "}
          <BlueLink to="/login" className="font-semibold">
            Cookie Preferences
          </BlueLink>
          ,{" "}
          <BlueLink to="/login" className="font-semibold">
            Privacy
          </BlueLink>
          , and{" "}
          <BlueLink to="/login" className="font-semibold">
            Terms
          </BlueLink>
          .
        </p>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);

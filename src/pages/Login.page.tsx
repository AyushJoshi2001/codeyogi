import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { BsToggleOn } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Btn from "../components/Btn";
import BlueLink from "../components/BlueLink";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  let emailValidateMessage = "";
  let passwordValidateMessage = "";

  if (!data.email) {
    emailValidateMessage = "Please enter the email address...";
  } else if (!data.email.endsWith("@gmail.com")) {
    emailValidateMessage = "Please enter valid email address...";
  }

  if (!data.password) {
    passwordValidateMessage = "Please enter the password...";
  } else if (data.password.length < 8) {
    passwordValidateMessage = "Please enter atleast 8 characters...";
  }

  return (
    <div className="pt-12 mx-auto text-gray-700 font-body">
      <div className="py-3 max-w-120 px-11">
        <h1 className="text-4xl font-medium">
          Log In to <BlueLink to="/signup">CORK</BlueLink>
        </h1>
        <p className="pt-3 text-sm font-semibold">
          New Here?{" "}
          <BlueLink to="/signup" className="border-b border-primary">
            Create an account
          </BlueLink>
        </p>

        <form
          className="pt-16"
          onSubmit={(event) => {
            event.preventDefault();

            setSubmit(true);
            console.log("Login Details : ", data);
            setTimeout(() => {
              console.log("Login Successfull...");
              console.log("Transfering to Dahsboard...");
              history.push("/dashboard");
            }, 5000);
          }}
        >
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Enter your email
            </label>
            <FaUser className="absolute text-lg text-primary" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="email"
              required
            />
            {touched.email && (
              <p className="text-red-600">{emailValidateMessage}</p>
            )}
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
              value={data.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="current-password"
              required
            />
            {touched.password && (
              <p className="text-red-600">{passwordValidateMessage}</p>
            )}
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex items-center">
              <p className="text-sm">Show Password</p>
              <div className="flex items-center pl-2">
                <BsToggleOn className="text-2xl text-primary" />
              </div>
            </div>
            <div className="flex">
              {submit && (
                <div className="flex items-center pr-4">
                  <ImSpinner3 className="animate-spin" />
                </div>
              )}
              <Btn type="submit" className="shadow-xl hover:shadow-none">
                Log In
              </Btn>
            </div>
          </div>

          <div className="flex justify-center pt-16 ">
            <div className="flex items-center pr-2">
              <input type="checkbox" name="loggedin" className="shadow-inner" />
            </div>
            <p className="text-sm text-gray-400">Keep me logged in</p>
          </div>
          <div className="pt-5 text-center text-primary">
            <BlueLink to="/signup" className="font-semibold">
              Forgot Password?
            </BlueLink>
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

Login.defaultProps = {};

export default memo(Login);

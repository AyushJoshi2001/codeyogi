import React, { memo } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Button from "../components/Button/Button";
import BlueLink from "../components/BlueLink";
import * as yup from "yup";
import { useFormik } from "formik";
import { login } from "../api/auth";
import { useHistory } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const history = useHistory();

  const [toggle, setToggle] = useState(false);
  let passwordType = toggle ? "text" : "password";

  const toggleClicked = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    setToggle(!toggle);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),

    onSubmit: (data) => {
      login(data).then(() => {
        // console.log("redirecting to dashboard...");
        // history.push("/dashboard");
        window.location.href = "/dashboard";
      });
    },
  });

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

        <form className="pt-16" onSubmit={formik.handleSubmit}>
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="email"
              required
            />
            {formik.touched.email && (
              <p className="text-red-600">{formik.errors.email}</p>
            )}
          </div>
          <div className="relative pt-10">
            <label htmlFor="password" className="sr-only">
              Enter your password
            </label>
            <FaLock className="absolute text-lg text-primary" />
            <input
              id="password"
              type={passwordType}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="current-password"
              required
            />
            {formik.touched.password && (
              <p className="text-red-600">{formik.errors.password}</p>
            )}
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex items-center">
              <p className="text-sm">Show Password</p>
              <div className="flex items-center pl-2">
                {toggle && (
                  <BsToggleOn
                    className="text-2xl text-primary"
                    onClick={toggleClicked}
                  />
                )}
                {!toggle && (
                  <BsToggleOff
                    className="text-2xl text-primary"
                    onClick={toggleClicked}
                  />
                )}
              </div>
            </div>
            <div className="flex">
              {formik.isSubmitting && (
                <div className="flex items-center pr-4">
                  <ImSpinner3 className="animate-spin" />
                </div>
              )}
              {
                <Button type="submit" className="shadow-xl hover:shadow-none">
                  Log In
                </Button>
              }
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

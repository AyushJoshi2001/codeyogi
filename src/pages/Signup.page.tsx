import { FC, memo } from "react";
import { BsToggleOn } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { SiMailDotRu } from "react-icons/si";
import BlueLink from "../components/BlueLink";
import Btn from "../components/Btn";
import * as yup from "yup";
import { useFormik } from "formik";
import { ImSpinner3 } from "react-icons/im";
import { useHistory } from "react-router-dom";

interface Props {}

const Signup: FC<Props> = (props) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object().shape({
      username: yup.string().required().min(5),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),

    onSubmit: (data) => {
      console.log("Login Details : ", data);
      setTimeout(() => {
        console.log("Login Successfull...");
        console.log("Transfering to Dahsboard...");
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className="w-1/2 mx-auto text-gray-700 pt-9 font-body">
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

        <form className="pt-12" onSubmit={formik.handleSubmit}>
          <div className="relative">
            <label htmlFor="username" className="sr-only">
              Enter your username
            </label>
            <FaUser className="absolute text-lg text-primary" />
            <input
              id="username"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Username"
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="Username"
              required
            />
            {formik.touched.username && (
              <p className="text-red-600">{formik.errors.username}</p>
            )}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
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
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="w-full px-8 pb-3 border-b border-gray-300 outline-none focus:border-primary"
              autoComplete="current-password"
              required
            />
            {formik.touched.password && (
              <p className="text-red-600">{formik.errors.password}</p>
            )}
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
              {formik.isSubmitting && (
                <div className="flex items-center pr-4">
                  <ImSpinner3 className="animate-spin" />
                </div>
              )}
              {
                <Btn type="submit" className="shadow-xl hover:shadow-none">
                  Log In
                </Btn>
              }
            </div>
          </div>
        </form>

        <p className="pt-16 text-sm">
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

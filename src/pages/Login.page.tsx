import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { BsToggleOn } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [submit, setSubmit] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  let emailValidatation = "";
  let passwordValidation = "";

  return (
    <div className="mx-auto">
      <div className="py-3 max-w-120 px-11">
        <h1 className="text-4xl font-semibold">
          Log In to <span className="text-primary">CORK</span>
        </h1>
        <p>
          New Here?{" "}
          <Link to="/signup" className="text-primary">
            Create an account
          </Link>
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
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              className="border-b-2 outline-none border-primary"
              autoComplete="email"
              required
            />
          </div>
          <div className="pt-10">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              className="border-b-2 outline-none border-primary"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex">
              <p>Show Password</p>
              <div className="flex items-center pl-2">
                <BsToggleOn className="text-2xl" />
              </div>
            </div>
            <div className="flex">
              {submit && (
                <div className="flex items-center pr-4">
                  <ImSpinner3 className="animate-spin" />
                </div>
              )}
              <button
                type="submit"
                className="px-5 py-2 text-sm text-white rounded bg-primary"
              >
                Log In
              </button>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <div className="flex items-center pr-2">
              <input type="checkbox" name="loggedin" />
            </div>
            <p>Keep me logged in</p>
          </div>
          <div className="text-center text-primary">
            <Link to="/signup">Forgot Password?</Link>
          </div>
        </form>

        <p className="pt-10">
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

Login.defaultProps = {};

export default memo(Login);

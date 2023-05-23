import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../useTitle";

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { login, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");

  const from = location.state?.from?.pathname || "/";
  const handleUserLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorText("");

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorText("User not found.Please Register.");
        } else if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorText("Wrong password.");
        }
        // console.error(error);
      });
  };

  return (
    <div className="hero py-8 bg-base-200">
      <div className="hero-content pt-0 flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="text"
                  required
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="text"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="text-sm text-red-500">{errorText}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary  bg-pink-600 hover:bg-pink-500 border-0"
                  value="Login"
                />
                <p className="p-2">
                  New to Imperial Toys?
                  <Link to={"/register"}>
                    {" "}
                    <span className="font-semibold text-pink-600">
                      Register here
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-4 space-x-2">
          <button
            onClick={handleGoogleLogin}
            className=" bg-pink-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

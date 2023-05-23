import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import useTitle from "../../useTitle";

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Login");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    setErrorText("");
    if (password.length < 6) {
      setErrorText("password must be atleast 6 characters or longer.");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const registeredUser = result.user;
        // console.log(registeredUser);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        setErrorText(error.message);
      });
  };

  return (
    <div className="hero py-8 bg-base-200">
      <div className="hero-content pt-0 flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">
                    Name <span className="font-light text-sm">(Optional)</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">
                    Photo URL{" "}
                    <span className="font-light text-sm">(Optional)</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
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
                  value="Register"
                />
                <p className="p-2">
                  Already have an account?
                  <Link to={"/login"}>
                    {" "}
                    <span className="font-semibold text-pink-600">
                      Login here
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

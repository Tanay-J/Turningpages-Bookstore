import styles from "./Auth.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { signUpHandler } from "../../utils/service-requests";

const SignupForm = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [signUpData, setSignUpData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState("");

  const userInputHandler = (e) => {
    const { id, value } = e.target;
    setSignUpData({ ...signUpData, [id]: value });
  };

  const dataValidation = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confPassword } = signUpData;
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (firstName && lastName && email && password) {
      if (!reg.test(email)) {
        setErrorMsg("Invalid Email Address");
      } else if (password !== confPassword) {
        setErrorMsg("Passwords do not match");
      } else {
        setErrorMsg("");
        signUpHandler(signUpData, setErrorMsg, dispatch, navigate, location);
      }
    } else setErrorMsg("All fields are mandatory");
  };

  return (
    <>
      <div className="wrapper mx-auto my-m">
        <main
          className={`${styles.auth_container} card-shadow p-m mx-auto br-m`}
        >
          <h6 className="h6 mx-auto my-s">Sign Up</h6>
          <form className="mx-auto p-s">
            <div className="flex gap-1 flex-wrap">
              <div className="flex flex-col">
                <label className="my-xs" htmlFor="firstName">
                  <small>First Name</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="firstName"
                  value={signUpData.firstName}
                  className={`${styles.auth_input} p-xs br-s`}
                  onChange={userInputHandler}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="my-xs" htmlFor="lastName">
                  <small>Last Name</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="lastName"
                  value={signUpData.lastName}
                  className={`${styles.auth_input} p-xs br-s`}
                  onChange={userInputHandler}
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="my-xs" htmlFor="email">
                <small>Email</small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="email"
                type="email"
                value={signUpData.email}
                className={`${styles.auth_input} p-xs br-s`}
                onChange={userInputHandler}
                required
                placeholder="email"
              />
            </div>
            <div className="flex flex-col">
              <label className="required my-xs" htmlFor="password">
                <small>Password </small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="password"
                value={signUpData.password}
                className={`${styles.auth_input} p-xs br-s`}
                onChange={userInputHandler}
                type="password"
                required
                placeholder="**********"
              />
            </div>
            <div className="flex flex-col">
              <label className="required my-xs" htmlFor="confPassword">
                <small>Confirm Password </small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="confPassword"
                className={`${styles.auth_input} p-xs br-s`}
                type="password"
                onChange={userInputHandler}
                required
                placeholder="**********"
              />
            </div>
            {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}
            <div className="flex flex-col">
              <button className="btn btn-primary my-m" onClick={dataValidation}>
                Sign Up
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export { SignupForm };

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { loginHandler } from "../../utils/service-requests";
import styles from "./Auth.module.css";

const LoginForm = () => {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useAuth();
  const location = useLocation();

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [inputType, setInputType] = useState("password");

  const userInputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setLoginData({ ...loginData, email: value });
    } else if (id === "password") {
      setLoginData({ ...loginData, password: value });
    }
  };
  const setGuestLogin = (e) => {
    e.preventDefault();
    setLoginData({ email: "tanay@gmail.com", password: "tanay" });
  };

  return (
    <>
      <div className="wrapper mx-auto my-m">
        {!isAuthenticated && (
          <main
            className={`${styles.auth_container} card-shadow p-m mx-auto br-m`}
          >
            <h6 className="h6 mx-auto my-s">Log In</h6>

            <form className={`${styles.form} mx-auto p-s`}>
              <div className="flex flex-col">
                <label className="my-xs" htmlFor="email">
                  <small>Username</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="email"
                  value={loginData.email}
                  className={`${styles.auth_input} p-xs br-s`}
                  onChange={userInputHandler}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <label className="required my-xs" htmlFor="password">
                  <small>Password </small>
                  <span className="text-danger"> *</span>
                </label>
                <div className={`${styles.auth_input_container} br-s`}>
                  <input
                    id="password"
                    value={loginData.password}
                    className={`${styles.auth_input_password} p-xs `}
                    type={inputType}
                    onChange={userInputHandler}
                    required
                    placeholder="**********"
                  />
                  {inputType === "password" ? (
                    <i
                      className="fas fa-eye"
                      onClick={() => setInputType("text")}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-eye-slash"
                      onClick={() => setInputType("password")}
                    ></i>
                  )}
                </div>
              </div>
              {errorMsg && (
                <p className="text-danger text-center">{errorMsg}</p>
              )}
              <div className="flex flex-col">
                {loginData.email && loginData.password ? (
                  <button
                    className="btn btn-primary my-m"
                    onClick={(event) =>
                      loginHandler(
                        loginData,
                        dispatch,
                        navigate,
                        location,
                        setErrorMsg,
                        event
                      )
                    }
                  >
                    {isAuthenticated ? "Log Out" : "Log In"}
                  </button>
                ) : (
                  <button className="btn btn-primary my-m" disabled>
                    Log In
                  </button>
                )}

                <Link to="/signup">
                  <button className="btn btn-outline outline-primary width-100">
                    Sign Up
                  </button>
                </Link>
                <button
                  className="btn btn-outline outline-primary my-m"
                  onClick={setGuestLogin}
                >
                  {isAuthenticated ? "Log Out" : "Log In as Guest"}
                </button>
              </div>
            </form>
          </main>
        )}

        {isAuthenticated && (
          <h2 className="text-center">You're now logged in</h2>
        )}
      </div>
    </>
  );
};

export { LoginForm };

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import styles from "./Auth.module.css";

const LoginForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <>
      <div className="wrapper mx-auto my-m">
        <main
          className={`${styles.auth_container} card-shadow p-m mx-auto br-m`}
        >
          <h6 className="h6 mx-auto my-s">Log In</h6>

          <form className="mx-auto p-s">
            <div className="flex flex-col">
              <label className="my-xs" for="username">
                <small>Username</small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="username"
                className={`${styles.auth_input} p-xs br-s`}
                required
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col">
              <label className="required my-xs" for="password">
                <small>Password </small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="password"
                className={`${styles.auth_input} p-xs br-s`}
                type="password"
                required
                placeholder="**********"
              />
            </div>
            <div className="flex flex-wrap justify-content-space-bet gap-2 my-xs">
              <div>
                <input type="checkbox" />
                <small>Remember Me</small>
              </div>
              <div>
                <a className="link font-bold" href="">
                  <small>Forgot Password?</small>
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="btn btn-primary my-m">
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
              <button className="btn btn-outline outline-primary">
                <a className="link" href="/pages/signup.html">
                  Sign Up
                </a>
              </button>
              <button
                className="btn btn-outline outline-primary my-m"
                onClick={loginHandler}
              >
                {isLoggedIn ? "Log Out" : "Log In as Guest"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export { LoginForm };

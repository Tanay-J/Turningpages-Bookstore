import styles from "./Auth.module.css";
import axios from "axios";

const SignupForm = () => {
  const signUp = async () => {
    try {
      const res = await axios.post("/api/auth/signup", {
        firstName: "Adarsh",
        lastName: "Balika",
        email: "adarshbalika21@neog.camp",
        password: "adarshBalika",
      });

      console.log("res", res);
    } catch (e) {
      console.log("error", e);
    }
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
                <label className="my-xs" for="firstname">
                  <small>First Name</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="firstname"
                  className={`${styles.auth_input} p-xs br-s`}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="my-xs" for="lastname">
                  <small>Last Name</small>
                  <span className="text-danger"> *</span>
                </label>
                <input
                  id="lastname"
                  className={`${styles.auth_input} p-xs br-s`}
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>
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
            <div className="flex flex-col">
              <label className="required my-xs" for="confPassword">
                <small>Confirm Password </small>
                <span className="text-danger"> *</span>
              </label>
              <input
                id="confPassword"
                className={`${styles.auth_input} p-xs br-s`}
                type="password"
                required
                placeholder="**********"
              />
            </div>
            <div className="flex justify-content-space-bet gap-2 my-xs">
              <div>
                <input type="checkbox" />
                <small>
                  I accept all{" "}
                  <a className="link link-dark font-bold" href="">
                    {" "}
                    Terms and Conditions
                  </a>
                </small>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="btn btn-primary my-m">Sign Up</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export { SignupForm };

import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <header className={`${styles.nav_header} nav-bg-transparent px-xl py-xs`}>
        <img
          className={`${styles.brand_logo}`}
          src={process.env.PUBLIC_URL + "/assets/Turning Pages-1.png"}
        />
        <input
          className={`input ${styles.search} p-xs br-s my-l mx-auto`}
          placeholder="Search"
        />
        <i class={`fas fa-moon ${styles.nav_icons} text-s`}></i>
        <nav className={`${styles.nav_links} my-l`}>
          <ul className={`${styles.nav_links}`}>
            <li className="px-s">
              <Link to="/login">
                <button className="btn btn-outline outline-primary">
                  Login
                </button>
              </Link>
            </li>
            <li className="px-s">
              <Link to="/signup">
                <button className="btn btn-primary">Sign Up</button>
              </Link>
            </li>
            <li className="px-s">
              <Link to="/cart">
                <div className="badge-container">
                  <div className="badge">
                    <i
                      className={`fas fa-shopping-cart ${styles.nav_icons} text-s`}
                    ></i>
                    <span className="badge-icon">0</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="px-s">
              <Link to="/wishlist">
                <div className="badge-container">
                  <div className="badge">
                    <i
                      className={`fas fa-heart ${styles.nav_icons} text-s`}
                    ></i>
                    <span className="badge-icon">0</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export { Navbar };

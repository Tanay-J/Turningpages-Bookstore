import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className={`${styles.topbar_container}`}>
      <Link to="/" className="link link-dark">
        Home
      </Link>
      <Link to="/products" className="link link-dark">
        All Products
      </Link>
      <Link to="" className="link link-dark">
        Categories{" "}
      </Link>
      <Link to="" className="link link-dark">
        Track Order
      </Link>
    </nav>
  );
};
export { Topbar };

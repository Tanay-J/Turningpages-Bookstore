import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { getBillingDetails } from "../../utils/getBillingDetails";
import { useAuth } from "../../contexts/auth-context";

const Navbar = () => {
  const { wishlistState } = useWishlist();
  const { wishlistItems } = wishlistState;
  const { totalQty } = getBillingDetails();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

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
      <i className={`fas fa-moon ${styles.nav_icons} text-s`}></i>
      <nav className={`${styles.nav_links} my-l`}>
        <ul className={`${styles.nav_links}`}>
          <li className="px-s">
            <Link to="/login">
              <button
                className="btn btn-outline outline-primary"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </Link>
          </li>
          {!isLoggedIn && (
            <li className="px-s">
              <Link to="/signup">
                <button className="btn btn-primary">Sign Up</button>
              </Link>
            </li>
          )}
          <li className="px-s">
            <Link to="/cart">
              <div className="badge-container">
                <div className="badge">
                  <i
                    className={`fas fa-shopping-cart ${styles.nav_icons} text-s`}
                  ></i>
                  <span className="badge-icon">{totalQty}</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="px-s">
            <Link to="/wishlist">
              <div className="badge-container">
                <div className="badge">
                  <i className={`fas fa-heart ${styles.nav_icons} text-s`}></i>
                  <span className="badge-icon">{wishlistItems.length}</span>
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

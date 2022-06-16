import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { getCart, getWishlist } from "../../utils/service-requests";

const Navbar = () => {
  const {
    state: { isAuthenticated, userData },
    dispatch,
  } = useAuth();

  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();

  const totalQty = cartItems.reduce((acc, curr) => (acc += curr.qty), 0);

  return (
    <header className={`${styles.nav_header} nav-bg-transparent px-xl py-xs`}>
      <img
        className={`${styles.brand_logo}`}
        src={process.env.PUBLIC_URL + "/assets/Turning Pages-1.png"}
      />
      <nav className={`${styles.nav_links} my-l`}>
        <ul className={`${styles.nav_links}`}>
          {isAuthenticated && (
            <li className="px-s">
              <i className="fas fa-user mx-xs"></i>
              <span className="font-bold">{userData.firstName}</span>
            </li>
          )}
          <li className="px-s">
            {!isAuthenticated ? (
              <Link to="/login">
                <button className="btn btn-outline outline-primary">
                  Log In
                </button>
              </Link>
            ) : (
              <Link to="/" className="link text-gray">
                <p onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
              </Link>
            )}
          </li>

          {!isAuthenticated && (
            <li className="px-s">
              <Link to="/signup">
                <button className="btn btn-primary">Sign Up</button>
              </Link>
            </li>
          )}

          <li className="px-s">
            <Link to="/wishlist" onClick={() => getWishlist(wishlistDispatch)}>
              <div className="badge-container">
                <div className="badge">
                  <i className={`fas fa-heart ${styles.nav_icons} text-s`}></i>
                  <span className="badge-icon">{wishlistItems.length}</span>
                </div>
              </div>
            </Link>
          </li>

          <li className="px-s">
            <Link to="/cart" onClick={() => getCart(cartDispatch)}>
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
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };

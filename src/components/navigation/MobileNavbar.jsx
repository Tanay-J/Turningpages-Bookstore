import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { getCart, getWishlist } from "../../utils/service-requests";
import styles from "./Navigation.module.css";

const MobileNavbar = () => {
  const {
    state: { isAuthenticated },
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

  const location = useLocation();

  const [show, setShow] = useState(false);

  const totalQty = cartItems.reduce((acc, curr) => (acc += curr.qty), 0);

  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <>
      <header
        className={`${styles.mobile_nav_header} nav-bg-transparent px-xl py-xs`}
      >
        <img
          className={`${styles.brand_logo}`}
          src={process.env.PUBLIC_URL + "/assets/Turning Pages-1.png"}
        />
        <i
          className={`fas fa-bars ${styles.nav_icons} ${styles.hamburger} text-s`}
          onClick={() => setShow(!show)}
        ></i>
        {show && (
          <ul
            className={`${styles.nav_links} ${styles.mobile_nav_links} card-shadow br-m py-s`}
          >
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
              <Link
                to="/wishlist"
                onClick={() => getWishlist(wishlistDispatch)}
              >
                <div className="badge-container">
                  <div className="badge">
                    <i
                      className={`fas fa-heart ${styles.nav_icons} text-s`}
                    ></i>
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
        )}
      </header>
    </>
  );
};

export { MobileNavbar };

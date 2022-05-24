import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../utils/service-requests";
import styles from "./Products.module.css";

const ProductCard = ({ product }) => {
  const {
    _id,
    author,
    badge,
    binding,
    discount,
    inStock,
    lang,
    price,
    productImg,
    rating,
    title,
  } = product;
  const {
    state: { isAuthenticated },
  } = useAuth();

  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();

  const navigate = useNavigate();
  return (
    <div
      className={`${styles.card_vertical} card-vertical card-shadow position-rel br-m`}
      key={_id}
    >
      {badge && (
        <small className="card-badge font-bold my-s px-xs">{badge}</small>
      )}
      {!inStock && (
        <strong className="overlay-text alert secondary ">Out of Stock</strong>
      )}
      <div className={`${!inStock ? "opacity" : ""} card-img mx-auto p-s`}>
        <Link to={`/products/${_id}`} state={{ product: product }}>
          <img src={productImg} alt="book cover" />
        </Link>
      </div>
      <div className={`${styles.card_details}`}>
        <div className="card-details px-s">
          <div className="text-xs font-light ">{title}</div>
          <div className="sub-title">
            {lang}, {binding}, {author}
          </div>
          <small className={`${rating < 3 ? "text-danger" : "text-success  "}`}>
            {rating} <i className="fas fa-star"></i>
          </small>
          <div className="font-bold">
            ₹ {Math.floor(price - (price * discount) / 100)}{" "}
            <small className="text-gray">
              <strike> {price}</strike>
            </small>
            <small className="font-bold">
              <em className="text-success"> ( -{discount}% ) </em>
            </small>
          </div>
        </div>
        <div className="card-props flex p-s">
          {cartItems.find((item) => item._id === _id) ? (
            <button className="btn btn-primary" disabled={!inStock}>
              <Link to="/cart" className="link link-white">
                Go to Cart
              </Link>
            </button>
          ) : (
            <button
              className="btn btn-primary"
              disabled={!inStock}
              onClick={() => {
                isAuthenticated
                  ? addToCart(
                      {
                        _id,
                        author,
                        badge,
                        binding,
                        discount,
                        inStock,
                        lang,
                        price,
                        productImg,
                        rating,
                        title,
                      },
                      cartDispatch,
                      wishlistDispatch
                    )
                  : navigate("/login");
              }}
            >
              Add to Cart
            </button>
          )}

          {wishlistItems.find((item) => item._id === _id) ? (
            <button
              className="btn btn-outline outline-success mx-xs"
              disabled={!inStock}
              onClick={() => removeFromWishlist(_id, wishlistDispatch)}
            >
              Saved
            </button>
          ) : (
            <button
              className="btn btn-outline outline-primary mx-xs"
              disabled={!inStock}
              onClick={() => {
                isAuthenticated
                  ? addToWishlist(
                      {
                        _id,
                        author,
                        badge,
                        binding,
                        discount,
                        inStock,
                        lang,
                        price,
                        productImg,
                        rating,
                        title,
                      },
                      wishlistDispatch,
                      cartDispatch
                    )
                  : navigate("/login");
              }}
            >
              Save for Later
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export { ProductCard };

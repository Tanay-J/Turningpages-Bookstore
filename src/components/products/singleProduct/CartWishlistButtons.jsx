import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/auth-context";
import { useCart } from "../../../contexts/cart-context";
import { useWishlist } from "../../../contexts/wishlist-context";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../utils/service-requests";

const CartWishlistButtons = ({ product }) => {
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
    <>
      {cartItems.find((item) => item._id === _id) ? (
        <button
          className="btn btn-primary text-xs flex-grow-1"
          disabled={!inStock}
        >
          <Link to="/cart" className="link link-white">
            Go to Cart
          </Link>
        </button>
      ) : (
        <button
          className="btn btn-primary text-xs flex-grow-1"
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
                  wishlistItems,
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
          className="btn btn-outline outline-success text-xs flex-grow-1"
          disabled={!inStock}
          onClick={() => removeFromWishlist(_id, wishlistDispatch)}
        >
          Saved
        </button>
      ) : (
        <button
          className="btn btn-outline outline-primary text-xs flex-grow-1"
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
                  cartItems,
                  cartDispatch
                )
              : navigate("/login");
          }}
        >
          Save for Later
        </button>
      )}
    </>
  );
};
export { CartWishlistButtons };

import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { getFinalProducts } from "../../utils/getFinalProducts";
import styles from "./Products.module.css";

const ProductList = () => {
  const { finalProducts } = getFinalProducts();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  return (
    <main className="mx-auto p-s">
      <div className="grid grid-col-3 gap-2">
        {finalProducts.length === 0 ? (
          <h3>No Products</h3>
        ) : (
          finalProducts.map(
            ({
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
            }) => {
              return (
                <div
                  className={`${styles.card_vertical} card-vertical card-shadow position-rel br-m`}
                  key={_id}
                >
                  {badge && (
                    <small className="card-badge font-bold my-s px-xs">
                      {badge}
                    </small>
                  )}
                  {!inStock && (
                    <strong className="overlay-text alert secondary ">
                      Out of Stock
                    </strong>
                  )}
                  <div
                    className={`${
                      !inStock ? "opacity" : ""
                    } card-img mx-auto p-s`}
                  >
                    <img src={productImg} alt="book cover" />
                  </div>
                  <div className={`${styles.card_details}`}>
                    <div className="card-details px-s">
                      <div className="text-xs font-light ">{title}</div>
                      <div className="sub-title">
                        {lang}, {binding}, {author}
                      </div>
                      <small
                        className={`${
                          rating < 3 ? "text-danger" : "text-success  "
                        }`}
                      >
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
                      {cartState.cartItems.find((item) => item._id === _id) ? (
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
                            cartDispatch({
                              type: "ADD_TO_CART",
                              payload: {
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
                            });
                            wishlistDispatch({
                              type: "REMOVE_FROM_WISHLIST",
                              payload: _id,
                            });
                          }}
                        >
                          Add to Cart
                        </button>
                      )}

                      {wishlistState.wishlistItems.find(
                        (item) => item._id === _id
                      ) ? (
                        <button
                          className="btn btn-outline outline-success mx-xs"
                          disabled={!inStock}
                          onClick={() =>
                            wishlistDispatch({
                              type: "REMOVE_FROM_WISHLIST",
                              payload: _id,
                            })
                          }
                        >
                          Saved
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline outline-primary mx-xs"
                          disabled={!inStock}
                          onClick={() => {
                            wishlistDispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: {
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
                            });
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: _id,
                            });
                          }}
                        >
                          Save for Later
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          )
        )}
      </div>
    </main>
  );
};

export { ProductList };

import styles from "./Cart.module.css";
import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";

const CartProducts = () => {
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistDispatch } = useWishlist();

  const totalQty = cartItems.reduce((acc, curr) => curr.qty + acc, 0);

  return (
    <main className="flex flex-col gap-2 mx-auto">
      <h6 className="h6 my-m">My Cart({totalQty})</h6>
      {cartItems.map((item) => {
        return (
          <div
            className="card-horizontal card-shadow p-xs mx-auto"
            key={item._id}
          >
            <div className="grid-row-span-2 card-img">
              <img src={item.productImg} alt="product image" />
            </div>
            <div className="mx-m">
              <div className="card-details">
                <div className="text-xs font-light ">{item.title}</div>
                <div className="sub-title ">
                  {item.lang}, {item.binding}, {item.author}
                </div>
                <div className="font-bold">
                  ₹{" "}
                  {Math.floor(item.price - (item.price * item.discount) / 100)}
                  <small className="text-gray">
                    <strike> {item.price}</strike>
                  </small>
                  <small className="font-bold">
                    <em className="text-success"> ( -{item.discount}% ) </em>
                  </small>
                </div>
              </div>
              <div className="my-xs">
                <button
                  disabled={item.qty == 1 ? true : false}
                  className={`${styles.minus}`}
                  onClick={() =>
                    cartDispatch({ type: "DECREASE_QTY", payload: item._id })
                  }
                >
                  <i className="fas fa-minus text-xxs px-xs"></i>
                </button>
                <span className={`${styles.qty} p-xs`}>{item.qty}</span>
                <button
                  className={`${styles.plus}`}
                  onClick={() =>
                    cartDispatch({ type: "INCREASE_QTY", payload: item._id })
                  }
                >
                  <i className="fas fa-plus text-xxs px-xs"></i>
                </button>
              </div>
              <div className="flex gap-2">
                <small
                  className="link"
                  onClick={() => {
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: item,
                    });
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item._id,
                    });
                  }}
                >
                  ADD TO WISHLIST
                </small>
                <small
                  className="link text-gray"
                  onClick={() =>
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item._id,
                    })
                  }
                >
                  REMOVE
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export { CartProducts };

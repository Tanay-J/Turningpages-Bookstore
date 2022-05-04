import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import { addToCart, removeFromWishlist } from "../../utils/service-requests";

const WishlistProducts = () => {
  const {
    wishlistState: { wishlistItems },
    wishlistDispatch,
  } = useWishlist();
  const { cartDispatch } = useCart();

  return (
    <div className="wrapper mx-auto my-m">
      <h6 className="h6 my-m text-center p-s">
        My Wishlist({wishlistItems.length})
      </h6>
      <main className="grid grid-col-3 mx-auto">
        {wishlistItems.map((item) => (
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
                  {Math.floor(
                    Number(item.price) -
                      (Number(item.price) * Number(item.discount)) / 100
                  )}
                  <small className="text-gray">
                    <strike> {item.price}</strike>
                  </small>
                  <small className="font-bold">
                    <em className="text-success"> ( -{item.discount}% ) </em>
                  </small>
                </div>
              </div>
              <div className="flex gap-2 my-m">
                <small
                  className="link"
                  onClick={() => {
                    addToCart(item, cartDispatch);
                    removeFromWishlist(item._id, wishlistDispatch);
                  }}
                >
                  ADD TO CART
                </small>
                <small
                  className="link text-gray"
                  onClick={() => removeFromWishlist(item._id, wishlistDispatch)}
                >
                  REMOVE
                </small>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export { WishlistProducts };

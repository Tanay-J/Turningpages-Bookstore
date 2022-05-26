import styles from "../Products.module.css";
import { CartWishlistButtons } from "./CartWishlistButtons";

const ProductDetails = ({ product }) => {
  const {
    author,
    badge,
    binding,
    description,
    discount,
    fastDelivery,
    inStock,
    lang,
    pages,
    price,
    rating,
    reviews,
    title,
  } = product;
  return (
    <section className={`${styles.prod_details_container} mx-l`}>
      <div className="my-xs">
        <p className="text-m font-bold">
          {title}
          {badge && (
            <small className="bg-success text-white text-xs px-xs mx-s br-l">
              {badge}
            </small>
          )}
        </p>
        <p className="text-gray">by {author}</p>
      </div>

      <div>
        <span
          className={`${
            rating < 3.5 ? "bg-primary" : "bg-success"
          } text-white px-xs br-s my-xs`}
        >
          {rating}
          <span className="text-xs">★</span>
        </span>

        <small className="text-gray mx-xs">{reviews} reviews</small>
      </div>
      <div className="my-xs">
        <span className="text-s font-bold mx-xs">
          ₹ {Math.floor(price - (price * discount) / 100)}
        </span>
        <s className="text-xs text-gray mx-xs">₹ {price}</s>
        <span className={`text-success px-xs br-s`}>Save {discount}%</span>
      </div>
      <div className="my-xs">
        <p className="font-bold">Description</p>
        <p>{description}</p>
      </div>
      <div className="my-xs">
        <p className="font-bold">Highlights</p>
        <p>
          <span>Language: {lang}</span>
          <span className="mx-s">Binding: {binding}</span>
          <span>Pages: {pages}</span>
        </p>
      </div>
      <p>
        {inStock ? (
          <span className="text-success">In Stock</span>
        ) : (
          <span className="text-danger">Out of Stock</span>
        )}
        {fastDelivery ? (
          <span className="mx-s">Fast Delivery Available</span>
        ) : (
          <span className="text-gray mx-s">Fast Delivery Not Available</span>
        )}
      </p>
      <div className="flex gap-1 my-s">
        <CartWishlistButtons product={product} />
      </div>
    </section>
  );
};
export { ProductDetails };

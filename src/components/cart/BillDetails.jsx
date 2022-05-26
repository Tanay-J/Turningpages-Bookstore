import styles from "./Cart.module.css";
import { getBillingDetails } from "../../utils/getBillingDetails";
import { useCart } from "../../contexts/cart-context";
import { Link } from "react-router-dom";

const BillDetails = () => {
  const { cartState } = useCart();
  const { cartItems } = cartState;

  const {
    totalAmount,
    totalQty,
    amountAfterDiscount,
    totalDiscount,
    delivery,
  } = getBillingDetails();

  return (
    cartItems.length > 0 && (
      <aside
        className={`${styles.price_details_container} flex flex-col px-m br-m`}
      >
        <h6 className="h6 my-m">Price Details</h6>

        <section className="flex flex-col gap-1">
          <div className="flex justify-content-space-bet">
            <p>Price ({totalQty} items)</p>
            <p>₹ {totalAmount}</p>
          </div>
          <div className="flex justify-content-space-bet">
            <p>Discount</p>
            <p className="text-success">₹ {totalDiscount}</p>
          </div>
          <div className="flex justify-content-space-bet">
            <p className="font-bold">Total</p>
            <p className="font-bold">₹ {amountAfterDiscount}</p>
          </div>
          <div className="flex justify-content-space-bet">
            <p>Delivery</p>
            <p className="text-success">₹ {delivery}</p>
          </div>
          <div className="flex justify-content-space-bet">
            <p className="text-xs font-bold">Final Amount</p>
            <p className="text-xs font-bold">
              ₹ {amountAfterDiscount + delivery}
            </p>
          </div>
        </section>

        <Link to="/checkout">
          <button className="btn btn-primary my-m py-l width-100">
            Checkout
          </button>
        </Link>
      </aside>
    )
  );
};

export { BillDetails };

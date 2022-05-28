import { useCart } from "../../contexts/cart-context";
import { getBillingDetails } from "../../utils/getBillingDetails";
import styles from "./Checkout.module.css";
const OrderSummary = () => {
  const {
    cartState: { cartItems },
  } = useCart();

  const {
    totalAmount,
    totalQty,
    amountAfterDiscount,
    totalDiscount,
    delivery,
  } = getBillingDetails();
  
  return (
    <section className="mx-auto">
      <p className="text-xs font-bold">Order Summary</p>
      <div className={`${styles.summary} text-center my-m`}>
        <p className="text-left font-bold">Book</p>
        <p className=" font-bold">Quantity</p>
        <p className=" font-bold">Price</p>
        <p className=" font-bold">Amount</p>
        {cartItems.map((item) => (
          <>
            <p className="text-left">{item.title} <span className="text-gray">by {item.author}</span></p>
            <p>{item.qty}</p>
            <p>₹{item.price}</p>
            <p>₹{item.price * item.qty}</p>
          </>
        ))}

        <hr className="width-100"></hr>
        <hr className="width-100"></hr>
        <hr className="width-100"></hr>
        <hr className="width-100"></hr>

        <p className="text-left">Total</p>
        <p>{totalQty}</p>
        <p></p>
        <p>₹{totalAmount}</p>

        <p className="text-left">Discount</p>
        <p></p>
        <p></p>
        <p className="text-success  font-bold">-₹{Math.abs(totalDiscount)}</p>

        <p className="text-left">Delivery</p>
        <p>{}</p>
        <p></p>
        <p>₹{delivery}</p>

        <p className="text-left text-xs font-bold">Final Amount</p>
        <p className=" text-xs font-bold"></p>
        <p></p>
        <p className=" text-xs font-bold">₹{amountAfterDiscount + delivery}</p>
      </div>
      <button className="btn btn-primary width-100">PLACE ORDER</button>
    </section>
  );
};
export { OrderSummary };

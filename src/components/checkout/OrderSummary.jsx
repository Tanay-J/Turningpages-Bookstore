import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { getBillingDetails } from "../../utils/getBillingDetails";
import { loadScript } from "../../utils/razorpay/loadScript";
import styles from "./Checkout.module.css";

const OrderSummary = () => {
  const {
    state: { userData },
  } = useAuth();
  const {
    cartState: { cartItems },
    cartDispatch,
  } = useCart();

  const {
    totalAmount,
    totalQty,
    amountAfterDiscount,
    totalDiscount,
    delivery,
  } = getBillingDetails();

  const navigate = useNavigate();

  const paymentHandler = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js "
    );

    if (!response) {
      alert("Payment failed. Try Again!");
    }

    const options = {
      key: process.env.REACT_APP_RZRPAY_KEY,
      currency: "INR",
      amount: (amountAfterDiscount + delivery) * 100,
      name: "Turning Pages Bookstore",
      description: "You are paying",
      image: "https://i.imgur.com/LiGUeU8.png",
      handler: function (response) {
        cartDispatch({ type: "CLEAR_CART" });
        navigate("/orderupdate", {
          state: {
            paymentId: response.razorpay_payment_id,
            cartItems: cartItems,
            amount: amountAfterDiscount + delivery,
          },
        });
      },
      prefill: {
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        contact: "8888888888",
      },
      theme: {
        color: "#f59e04",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      {cartItems.length ? (
        <section className="mx-auto">
          <p className="text-xs font-bold">Order Summary</p>
          <div className={`${styles.summary} text-center my-m`}>
            <p className="text-left font-bold">Book</p>
            <p className=" font-bold">Quantity</p>
            <p className=" font-bold">Price</p>
            <p className=" font-bold">Amount</p>
            {cartItems.map((item) => (
              <Fragment key={item._id}>
                <p className="text-left">
                  {item.title}{" "}
                  <span className="text-gray">by {item.author}</span>
                </p>
                <p>{item.qty}</p>
                <p>₹{item.price}</p>
                <p>₹{item.price * item.qty}</p>
              </Fragment>
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
            <p className="text-success  font-bold">
              -₹{Math.abs(totalDiscount)}
            </p>

            <p className="text-left">Delivery</p>
            <p>{}</p>
            <p></p>
            <p>₹{delivery}</p>

            <p className="text-left text-xs font-bold">Final Amount</p>
            <p className=" text-xs font-bold"></p>
            <p></p>
            <p className=" text-xs font-bold">
              ₹{amountAfterDiscount + delivery}
            </p>
          </div>
          <button
            className="btn btn-primary width-100"
            onClick={paymentHandler}
          >
            PLACE ORDER
          </button>
        </section>
      ) : (
        <section className=" mx-auto text-center">
          <p className="my-xs text-xs">Your Cart is empty</p>
          <p className="my-xs text-xs">
            To Checkout and Place Order, Please add Products to the Cart
          </p>{" "}
        </section>
      )}
    </>
  );
};
export { OrderSummary };

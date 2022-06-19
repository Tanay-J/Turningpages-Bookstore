import { useLocation } from "react-router-dom";
import { Footer, Navbar, Topbar } from "../../components";
import styles from "./Checkout.module.css";

const OrderUpdate = () => {
  const {
    state: { paymentId, cartItems, amount },
  } = useLocation();
  return (
    <>
      {paymentId && (
        <main className="grid grid-col-2 ">
          <img
            className={`${styles.order_banner} mx-auto`}
            src={process.env.PUBLIC_URL + "/assets/orderplaced.svg"}
          />
          <div className="card-shadow  text-center m-l">
            <h2 className="my-m">Thank You for Shopping!</h2>

            <p className="text-xs font-bold my-m">Order Summary</p>
            <ul>
              {cartItems.map((item) => (
                <li
                  className="flex gap-1 align-items-center mx-l my-xs"
                  key={item._id}
                >
                  <img
                    className={`${styles.thumbnail}`}
                    src={item.productImg}
                  />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
            <div className="my-l">
              <p className="text-xs">Amount Paid: ₹{amount}</p>
              <p>Payment ID: {paymentId}</p>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
};
export { OrderUpdate };

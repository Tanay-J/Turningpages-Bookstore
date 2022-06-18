import { BillDetails } from "../../components/cart/BillDetails";
import { CartProducts, Footer, Navbar, Topbar } from "../../components/index";

const Cart = () => {
  return (
    <>
      <div className="wrapper flex mx-auto my-m">
        <CartProducts />
        <BillDetails />
      </div>
      <Footer />
    </>
  );
};

export { Cart };

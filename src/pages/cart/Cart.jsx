import { BillDetails } from "../../components/cart/BillDetails";
import { CartProducts, Footer, Navbar, Topbar } from "../../components/index";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <div className="wrapper flex mx-auto my-m">
        <CartProducts />
        <BillDetails />
      </div>
      <Footer />
    </>
  );
};

export { Cart };

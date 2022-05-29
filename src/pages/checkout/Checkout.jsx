import { Addresses, Navbar, OrderSummary, Topbar } from "../../components";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <h3 className="text-center my-m">Checkout</h3>
      <main className="grid grid-col-2">
        <Addresses />
        <OrderSummary />
      </main>
    </>
  );
};
export { Checkout };
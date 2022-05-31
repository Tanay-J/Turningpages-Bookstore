import { useCart } from "../contexts/cart-context";

const getBillingDetails = () => {
  let delivery = 0;
  const {
    cartState: { cartItems },
  } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, curr) => Number(curr.price) * Number(curr.qty) + acc,
    0
  );

  const totalQty = cartItems.reduce((acc, curr) => Number(curr.qty) + acc, 0);

  const amountAfterDiscount = cartItems.reduce(
    (acc, curr) =>
      Math.floor(
        Number(curr.price) - (Number(curr.price) * Number(curr.discount)) / 100
      ) *
        Number(curr.qty) +
      acc,
    0
  );
  const totalDiscount = amountAfterDiscount - totalAmount;

  cartItems.length > 0 && amountAfterDiscount < 499
    ? (delivery = 40)
    : (delivery = 0);

  return {
    totalAmount,
    totalQty,
    amountAfterDiscount,
    totalDiscount,
    delivery,
  };
};

export { getBillingDetails };

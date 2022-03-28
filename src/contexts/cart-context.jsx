import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartReducer } from "../utils/reducers/cartReducer";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

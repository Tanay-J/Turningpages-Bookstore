import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import { cartReducer } from "../utils/reducers/cartReducer";
import { getCart } from "../utils/service-requests";
import { useAuth } from "./auth-context";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  useEffect(() => {
    isAuthenticated && getCart(cartDispatch);
  }, [isAuthenticated]);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

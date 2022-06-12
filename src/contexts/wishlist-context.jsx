import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../utils/reducers/wishlistReducer";
import { getWishlist } from "../utils/service-requests";
import { useAuth } from "./auth-context";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAuth();
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItems: [],
  });
  useEffect(() => {
    isAuthenticated && getWishlist(wishlistDispatch);
  }, [isAuthenticated]);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };

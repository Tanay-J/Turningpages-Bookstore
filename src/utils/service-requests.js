import axios from "axios";
import { getLocalStorageData } from "./getLocalStorageData";

const { token, userData } = getLocalStorageData();
//Cart
export const getCart = async (cartDispatch) => {
  const response = await axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
  if (response.status === 200) {
    cartDispatch({ type: "GET_CART", payload: response.data.cart });
  }
};

export const addToCart = async (product, cartDispatch, wishlistDispatch) => {
  const response = await axios.post(
    "/api/user/cart",
    { product: product },
    { headers: { authorization: token } }
  );
  if (response.status === 201) {
    cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    removeFromWishlist(product._id, wishlistDispatch);
  }
};

export const changeQty = async (id, actionType, cartDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: actionType } },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      cartDispatch({ type: "CHANGE_QTY", payload: response.data.cart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = async (id, cartDispatch) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    }
  } catch (error) {
    console.log(error);
  }
};

//Wishlist
export const getWishlist = async (wishlistDispatch) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      wishlistDispatch({
        type: "GET_WISHLIST",
        payload: response.data.wishlist,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const addToWishlist = async (
  product,
  wishlistDispatch,
  cartDispatch
) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
      removeFromCart(product._id, cartDispatch);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromWishlist = async (id, wishlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//signup
export const signUpHandler = async (signUpData, navigate, setErrorMsg) => {
  try {
    const response = await axios.post("/api/auth/signup", signUpData);
    if (response.status === 201) {
      setErrorMsg("");
      navigate("/login");
    }
  } catch (error) {
    if (error.response.status === 422) {
      setErrorMsg("Email Already Exists.");
    }
  }
};

//login
export const loginHandler = async (
  loginData,
  dispatch,
  cartDispatch,
  wishlistDispatch,
  navigate,
  location,
  setErrorMsg,
  event
) => {
  event.preventDefault();

  try {
    let response = await axios.post("/api/auth/login", loginData);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      setErrorMsg("");
      dispatch({ type: "LOGIN", payload: response.data });
      getCart(cartDispatch);
      getWishlist(wishlistDispatch);
      navigate(location?.state?.from?.pathname || "/");
    } else if (response.status === 201) {
      setErrorMsg("The credentials you entered are invalid");
    }
  } catch (error) {
    if (error.response.status === 404) {
      setErrorMsg("The email you entered is not Registered");
    }
  }
};

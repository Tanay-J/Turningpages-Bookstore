import axios from "axios";
import toast from "react-hot-toast";
import { getLocalStorageData } from "./getLocalStorageData";
import { findItem } from "./findItem";

//Cart
export const getCart = async (cartDispatch) => {
  try {
    const { token } = getLocalStorageData();
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      cartDispatch({ type: "GET_CART", payload: response.data.cart });
    }
  } catch (error) {
    if (error.response.status === 500) {
      toast.error("Please Login");
    } else toast.error("Unable to get Cart items, try again!");
    throw new Error(error);
  }
};

export const addToCart = async (
  product,
  cartDispatch,
  wishlistItems,
  wishlistDispatch
) => {
  try {
    const { token } = getLocalStorageData();
    const response = await axios.post(
      "/api/user/cart",
      { product: product },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      toast.success("Added to Cart");
      cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
      if (findItem(wishlistItems, product._id)) {
        removeFromWishlist(product._id, wishlistDispatch);
      }
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

export const changeQty = async (
  id,
  actionType,
  cartDispatch,
  setIsUpdating
) => {
  try {
    setIsUpdating(true);
    const { token } = getLocalStorageData();
    const response = await axios.post(
      `/api/user/cart/${id}`,
      { action: { type: actionType } },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      cartDispatch({ type: "CHANGE_QTY", payload: response.data.cart });
      setIsUpdating(false);
    }
  } catch (error) {
    toast.error("Unable to update quantity, try again!");
    throw new Error(error);
  }
};

export const removeFromCart = async (id, cartDispatch, noToast) => {
  try {
    const { token } = getLocalStorageData();
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      !noToast && toast.success("Removed from Cart");
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

//Wishlist
export const getWishlist = async (wishlistDispatch) => {
  try {
    const { token } = getLocalStorageData();
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
    if (error.response.status === 500) {
      toast.error("Please Login");
    } else toast.error("Unable to get Wishlist items, try again!");
    throw new Error(error);
  }
};
export const addToWishlist = async (
  product,
  wishlistDispatch,
  cartItems,
  cartDispatch
) => {
  try {
    const { token } = getLocalStorageData();
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      toast.success("Added to Wishlist");
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
      if (findItem(cartItems, product._id)) {
        removeFromCart(product._id, cartDispatch);
      }
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

export const removeFromWishlist = async (id, wishlistDispatch) => {
  try {
    const { token } = getLocalStorageData();
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      toast.success("Removed from Wishlist");
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
    }
  } catch (error) {
    toast.error("Something went wrong, try again!");
    throw new Error(error);
  }
};

//signup
export const signUpHandler = async (
  signUpData,
  setErrorMsg,
  dispatch,
  navigate,
  location
) => {
  try {
    const response = await axios.post("/api/auth/signup", signUpData);
    if (response.status === 201) {
      setErrorMsg("");
      toast.success("Signup successful!");
      loginHandler(
        { email: signUpData.email, password: signUpData.password },
        dispatch,
        navigate,
        location,
        setErrorMsg
      );
    }
  } catch (error) {
    if (error.response?.status === 422) {
      toast.error("Email already exists, please Login");
      setErrorMsg("Email already exists, please Login");
    } else {
      toast.error("Something went wrong, try again!");
      throw new Error(error);
    }
  }
};

//login
export const loginHandler = async (
  loginData,
  dispatch,
  navigate,
  location,
  setErrorMsg,
  event
) => {
  event && event.preventDefault();

  try {
    let response = await axios.post("/api/auth/login", loginData);

    if (response.status === 200) {
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      setErrorMsg("");
      dispatch({ type: "LOGIN", payload: response.data });
      navigate(location?.state?.from?.pathname || "/");
      toast.success(`Welcome ${response.data.foundUser.firstName}`);
    } else if (response.status === 201) {
      toast.error("Invalid credentials");
      setErrorMsg("The credentials you entered are invalid");
    }
  } catch (error) {
    if (error.response.status === 404) {
      toast.error("Email not registered");
      setErrorMsg("The email you entered is not Registered");
    } else {
      toast.error("Something went wrong, try again!");
      throw new Error(error);
    }
  }
};

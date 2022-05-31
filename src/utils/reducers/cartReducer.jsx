const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: action.payload };

    case "GET_CART":
      return { ...state, cartItems: action.payload };

    case "REMOVE_FROM_CART":
      return { ...state, cartItems: action.payload };

    case "CHANGE_QTY":
      return { ...state, cartItems: action.payload };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export { cartReducer };

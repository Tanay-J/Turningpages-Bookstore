export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "DECREASE_QTY":
      return {
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case "INCREASE_QTY":
      return {
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    default:
      break;
  }
}


export function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        wishlistItems: [...state.wishlistItems, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        wishlistItems: state.wishlistItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      break;
  }
}

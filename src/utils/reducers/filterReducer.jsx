export function filterReducer (state, action){
    switch (action.type) {
      case "LOW_TO_HIGH":
        return { ...state, sorting: action.payload };
      case "HIGH_TO_LOW":
        return { ...state, sorting: action.payload };
      case "INCLUDE_OUT_OF_STOCK":
        return { ...state, includeOOS: action.payload };
      case "FAST_DELIVERY_ONLY":
        return { ...state, fastDeliveryOnly: action.payload };
      case "SET_MAX_PRICE":
        return { ...state, maxPrice: action.payload };
      case "SET_CATEGORY":
        return {
          ...state,
          categoryName: state.categoryName.includes(action.payload)
            ? state.categoryName.filter((cat) => cat !== action.payload)
            : [...state.categoryName, action.payload],
        };
      case "REMOVE_CATEGORIES":
        return {
          ...state,
          categoryName: action.payload,
        };
      case "SET_BINDING":
        return { ...state, binding: [...state.binding, action.payload] };
      case "REMOVE_BINDING":
        return {
          ...state,
          binding: state.binding.filter((item) => item !== action.payload),
        };
      case "SET_RATING":
        return {
          ...state,
          ratingSort: action.payload,
        };
      case "CLEAR":
        return {
          ...state,
          sorting: "",
          maxPrice: 2000,
          includeOOS: false,
          fastDeliveryOnly: false,
          categoryName: ["Fiction", "Non-Fiction", "Self-Help",'Box-sets','Special Editions'],
          binding: ["Hardcover", "Paperback"],
          ratingSort: 0,
        };
      default:
        break;
    }
  };


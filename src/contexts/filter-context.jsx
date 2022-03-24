import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../utils/reducers/filterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sorting: "",
    maxPrice: 2000,
    includeOOS: false,
    fastDeliveryOnly: false,
    categoryName: [
      "Fiction",
      "Non-Fiction",
      "Self-Help",
      "Box-sets",
      "Special Editions",
    ],
    binding: ["Hardcover", "Paperback"],
    ratingSort: 0,
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };

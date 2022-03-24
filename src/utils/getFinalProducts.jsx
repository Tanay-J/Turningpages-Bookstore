import { useFilter } from "../contexts/filter-context";
import { useProducts } from "../hooks";

const getFinalProducts = () => {
  const { products } = useProducts();

  const { filterState } = useFilter();

  const getCategoryProducts = (state, products) => {
    return products.filter((prod) =>
      state.categoryName.some((cat) => prod.categoryName.includes(cat))
    );
  };
  
  const getSortedProducts = (state, products) => {
    switch (state.sorting) {
      case "lth":
        return products.sort(
          (a, b) =>
            a.price -
            (a.price * a.discount) / 100 -
            (b.price - (b.price * b.discount) / 100)
        );
      case "htl":
        return products.sort(
          (a, b) =>
            b.price -
            (b.price * b.discount) / 100 -
            (a.price - (a.price * a.discount) / 100)
        );
      default:
        return products;
    }
  };

  const getInStockProducts = (state, products) =>
    !state.includeOOS ? products.filter((prod) => prod.inStock) : products;

  const getFastDeliveryProducts = (state, products) =>
    state.fastDeliveryOnly
      ? products.filter((prod) => prod.fastDelivery)
      : products;

  const getProductsBelowMaxPrice = (state, products) =>
    products.filter(
      (prod) => prod.price - (prod.price * prod.discount) / 100 < state.maxPrice
    );

  const getBindingProducts = (state, products) =>
    products.filter((prod) => state.binding.includes(prod.binding));

  const getRatingSortedProducts = (state, products) =>
    products.filter((prod) => prod.rating > state.ratingSort);

  const compose = (state, ...functions) => {
    return functions.reduce((acc, curr) => curr(state, acc), products);
  };

  const finalProducts = compose(
    filterState,
    getCategoryProducts,
    getBindingProducts,
    getSortedProducts,
    getRatingSortedProducts,
    getInStockProducts,
    getFastDeliveryProducts,
    getProductsBelowMaxPrice
  );
  return { finalProducts };
};

export { getFinalProducts };

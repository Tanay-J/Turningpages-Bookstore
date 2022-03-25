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
            Number(a.price) -
            (Number(a.price) * Number(a.discount)) / 100 -
            (Number(b.price) - (Number(b.price) * Number(b.discount)) / 100)
        );
      case "htl":
        return products.sort(
          (a, b) =>
            Number(b.price) -
            (Number(b.price) * Number(b.discount)) / 100 -
            (Number(a.price) - (Number(a.price) * Number(a.discount)) / 100)
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
      (prod) =>
        Number(prod.price) - (Number(prod.price) * Number(prod.discount)) / 100 < Number(state.maxPrice)
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

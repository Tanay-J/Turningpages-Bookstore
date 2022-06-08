import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useCategories } from "../../hooks/useCategories";

const Topbar = () => {
  const { filterDispatch } = useFilter();
  const { categories } = useCategories();
  return (
    <nav className={`${styles.topbar_container}`}>
      <Link to="/" className="link link-dark">
        Home
      </Link>
      <Link
        to="/products"
        className="link link-dark"
        onClick={() => {
          filterDispatch({ type: "REMOVE_CATEGORIES", payload: [] });
          categories.map((cat) =>
            filterDispatch({
              type: "SET_CATEGORY",
              payload: cat.categoryName,
            })
          );
        }}
      >
        All Products
      </Link>
      <Link to="/categories" className="link link-dark">
        Categories
      </Link>
    </nav>
  );
};
export { Topbar };

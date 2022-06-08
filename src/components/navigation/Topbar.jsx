import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useCategories } from "../../hooks/useCategories";

const Topbar = () => {
  const { filterDispatch } = useFilter();
  const { categories } = useCategories();
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "orange" : "",
  });

  return (
    <nav className={`${styles.topbar_container}`}>
      <NavLink to="/" className="link link-dark" style={activeStyle}>
        Home
      </NavLink>
      <NavLink
        to="/products"
        className="link link-dark"
        style={activeStyle}
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
         Books
      </NavLink>
      <NavLink to="/categories" className="link link-dark" style={activeStyle}>
        Categories
      </NavLink>
    </nav>
  );
};
export { Topbar };

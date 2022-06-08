import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import { useCategories } from "../../hooks";
import { useFilter } from "../../contexts/filter-context";

const SpecialCategories = () => {
  const { categories } = useCategories();
  const { filterDispatch } = useFilter();
  return (
    <section className="wrapper mx-auto my-xl">
      <h6 className="h6 text-dark text-center">Special Categories</h6>
      <div className={`${styles.categories} my-m`}>
        {categories.map((category) => {
          return (
            <Fragment key={category._id}>
              {category.categoryType === "special" && (
                <Link
                  to="/products"
                  onClick={() => {
                    filterDispatch({
                      type: "REMOVE_CATEGORIES",
                      payload: [],
                    });
                    filterDispatch({
                      type: "SET_CATEGORY",
                      payload: category.categoryName,
                    });
                  }}
                >
                  <div
                    className={`pos-rel card-shadow ${styles.category_card} p-m br-m`}
                  >
                    <img
                      className={`${styles.category_card_img}`}
                      src={category.categoryImg}
                    ></img>
                    <h3 className={`${styles.text_overlay} text-white`}>
                      {category.categoryName}
                    </h3>
                  </div>
                </Link>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export { SpecialCategories };

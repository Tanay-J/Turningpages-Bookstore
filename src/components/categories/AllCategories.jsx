import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useCategories } from "../../hooks";
import styles from "./Categories.module.css";

const AllCategories = () => {
  const { categories } = useCategories();
  const { filterDispatch } = useFilter();

  return (
    <main className={`${styles.wrapper} mx-auto my-xl`}>
      <h6 className="h6 text-dark text-center">Categories</h6>
      <div className={`${styles.categories} mx-l my-m`}>
        {categories.map((category) => {
          return (
            <Fragment key={category._id}>
              {category.categoryName && (
                <Link
                  to="/products"
                  className={`${styles.link}`}
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
    </main>
  );
};
export { AllCategories };

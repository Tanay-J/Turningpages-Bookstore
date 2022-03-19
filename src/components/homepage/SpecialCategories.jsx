import styles from "./Homepage.module.css";
import { useCategories } from "../../hooks";

const SpecialCategories = () => {
  const { categories } = useCategories();
  return (
    <section className="wrapper mx-auto my-xl">
      <h6 className="h6 text-dark text-center">Special Categories</h6>
      <div className={`${styles.categories} my-m`}>
        {categories.map((category) => {
          return (
            <>
              {category.categoryType === "special" && (
                <div
                  className={`pos-rel card-shadow ${styles.category_card} p-m br-m`}
                >
                  <img
                    className={`${styles.category_card_img}`}
                    src={category.categoryImg}
                  ></img>
                  <h3 class={`${styles.text_overlay} text-white`}>
                    {category.categoryName}
                  </h3>
                </div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export { SpecialCategories };

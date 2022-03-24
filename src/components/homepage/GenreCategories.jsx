import styles from "./Homepage.module.css";
import { useCategories } from "../../hooks";

const GenreCategories = () => {
  const { categories } = useCategories();

  return (
    <section className="wrapper mx-auto my-m">
      <h6 className="h6 text-dark text-center">Popular Genres</h6>
      <div className={`${styles.categories} my-m`}>
        {categories.map((category) => {
          return (
            category.categoryType === "genre" && (
              <div
                className={`pos-rel card-shadow ${styles.category_card} p-m br-m`}
                key={category._id}
              >
                <img
                  className={`${styles.category_card_img}`}
                  src={category.categoryImg}
                ></img>
                <h3 class={`${styles.text_overlay} text-white`}>
                  {category.categoryName}
                </h3>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export { GenreCategories };

import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";
import { useProducts } from "../../hooks";

const Featured = () => {
  const { products } = useProducts();
  const { filterDispatch } = useFilter();

  return (
    <div className="wrapper mx-auto my-m">
      <h6 className="h6 text-center text-dark my-m">Featured Categories</h6>
      <section className={`${styles.featured_wrapper}`}>
        {products.map((prod) => {
          return (
            prod.featured && (
              <section
                className={`${styles.featured_container} text-left p-l`}
                key={prod._id}
              >
                <img
                  className={`${styles.card_img_s} grid-row-span-2`}
                  src={prod.productImg}
                />
                <div className="px-m">
                  <small className="bg-primary font-bold text-white px-s br-m">
                    {prod.badge}
                  </small>
                </div>
                <div className="text-dark px-m">
                  <p className="text-xs font-xbold">{prod.title}</p>
                  <p>and other books by top authors</p>

                  <Link to={`/products`}>
                    <button
                      className="btn btn-outline my-s"
                      onClick={() => {
                        filterDispatch({
                          type: "REMOVE_CATEGORIES",
                          payload: [],
                        });
                        filterDispatch({
                          type: "SET_CATEGORY",
                          payload: prod.badge,
                        });
                      }}
                    >
                      Browse
                    </button>
                  </Link>
                </div>
              </section>
            )
          );
        })}
      </section>
    </div>
  );
};

export { Featured };

import { getFinalProducts } from "../../utils/getFinalProducts";
import { ProductCard } from "./ProductCard";
import styles from "./Products.module.css";

const ProductList = () => {
  const { finalProducts } = getFinalProducts();

  return (
    <main className="mx-auto p-s">
      <div className={`${styles.prod_list}`}>
        {finalProducts.length === 0 ? (
          <h3>No Products</h3>
        ) : (
          finalProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))
        )}
      </div>
    </main>
  );
};

export { ProductList };

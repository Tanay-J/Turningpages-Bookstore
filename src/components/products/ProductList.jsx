import { getFinalProducts } from "../../utils/getFinalProducts";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const { finalProducts } = getFinalProducts();

  return (
    <main className="mx-auto p-s">
      <div className="grid grid-col-3 gap-2">
        {finalProducts.length === 0 ? (
          <h3>No Products</h3>
        ) : (
          finalProducts.map((product) => <ProductCard product={product} />)
        )}
      </div>
    </main>
  );
};

export { ProductList };

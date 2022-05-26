import { useLocation } from "react-router-dom";
import { Footer, Navbar, ProductDetails, Topbar } from "../../components";
import { ProductImage } from "../../components/products/singleProduct/ProductImage";
import styles from "./Products.module.css";

const SingleProduct = () => {
  const {
    state: { product },
  } = useLocation();

  return (
    <>
      <Navbar />
      <Topbar />
      <main
        className={`${styles.single_prod_container} py-xl my-m mx-auto card-shadow`}
      >
        <ProductImage productImg={product.productImg} />
        <ProductDetails product={product} />
      </main>
      <Footer />
    </>
  );
};
export { SingleProduct };

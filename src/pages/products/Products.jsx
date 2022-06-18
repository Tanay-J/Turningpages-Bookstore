import {
  FilterAndSort,
  Footer,
  Navbar,
  ProductList,
  Topbar,
} from "../../components";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <>
      <div className={`${styles.prod_list_wrapper} wrapper mx-auto my-m`}>
        <FilterAndSort />
        <ProductList />
      </div>

      <Footer />
    </>
  );
};

export { Products };

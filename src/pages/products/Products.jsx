import {
  FilterAndSort,
  Footer,
  MobileFilterAndSort,
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
        <MobileFilterAndSort />
        <ProductList />
      </div>

      <Footer />
    </>
  );
};

export { Products };

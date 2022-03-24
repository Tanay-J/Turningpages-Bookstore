import {
  FilterAndSort,
  Footer,
  Navbar,
  ProductList,
  Topbar,
} from "../../components";

const Products = ({ category }) => {
  return (
    <>
      <Navbar />
      <Topbar />
      <div class="wrapper flex mx-auto my-m">
        <FilterAndSort />
        <ProductList category={category} />
      </div>

      <Footer />
    </>
  );
};

export { Products };

import {
  FilterAndSort,
  Footer,
  Navbar,
  ProductList,
  Topbar,
} from "../../components";

const Products = () => {
  return (
    <>
      <Navbar />
      <Topbar />
      <div class="wrapper flex mx-auto my-m">
        <FilterAndSort />
        <ProductList />
      </div>

      <Footer />
    </>
  );
};

export { Products };

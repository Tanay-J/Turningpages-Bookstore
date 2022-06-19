import {
  Navbar,
  Banner,
  Featured,
  GenreCategories,
  SpecialCategories,
  Footer,
  Topbar,
} from "../../components";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Featured />
      <GenreCategories />
      <SpecialCategories />
      <Footer />
    </>
  );
};

export { Homepage };

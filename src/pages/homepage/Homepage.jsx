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
      <Navbar />
      <Topbar />
      <Banner />
      <Featured />
      <GenreCategories />
      <SpecialCategories />
      <Footer />
    </>
  );
};

export { Homepage };

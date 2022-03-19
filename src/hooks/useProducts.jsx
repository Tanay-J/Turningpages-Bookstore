import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = ({ categoryName }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("/api/products");
    const { products } = data;
    setProducts(
      products.filter((prod) =>
        categoryName ? prod.categoryName.includes(categoryName) : prod
      )
    );
  }, []);
  return { products, setProducts };
};

export { useProducts };

import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = ({ categoryName }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("/api/products");
      const { products } = data;
      setProducts(
        products.filter((prod) =>
          categoryName ? prod.categoryName.includes(categoryName) : prod
        )
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { products, setProducts };
};

export { useProducts };

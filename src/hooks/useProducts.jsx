import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("/api/products");
      const { products } = data;
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { products, setProducts };
};

export { useProducts };

import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get("/api/categories");
      const { categories } = data;
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { categories, setCategories };
};

export { useCategories };

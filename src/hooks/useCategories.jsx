import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("/api/categories");
    const { categories } = data;
    setCategories(categories);
  }, []);
  return { categories, setCategories };
};

export { useCategories };

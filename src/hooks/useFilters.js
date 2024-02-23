import { useState } from "react";

export const useFilters = (initialData) => {
  const [filters, setFilters] = useState(initialData);

  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};

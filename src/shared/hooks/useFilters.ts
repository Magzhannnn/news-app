import { useState } from "react";
import { IFilters } from "../interfaces";

export const useFilters = (initialData: IFilters) => {
  const [filters, setFilters] = useState(initialData);

  const changeFilter = (key: string, value: string | null | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};

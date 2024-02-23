import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  const fetchHandle = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFunction(params);

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHandle();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};

import { useEffect, useState } from "react";

interface FetchFunstion<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(
  fetchFunction: FetchFunstion<P, T>,
  params?: P
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  const fetchHandle = async () => {
    try {
      setIsLoading(true);

      const response = await fetchFunction(params);

      setData(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHandle();
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};

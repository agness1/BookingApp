import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useFetchData = <T, >(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    setState({ data: null, loading: true, error: null });

    axios.get<T>(url)
      .then(response => {
        if (isMounted) {
          setState({ data: response.data, loading: false, error: null });
        }
      })
      .catch(error => {
        if (isMounted) {
          setState({ data: null, loading: false, error });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return state;
};

export default useFetchData;

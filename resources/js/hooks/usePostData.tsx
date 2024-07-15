import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface PostState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const usePostData = <T, R = any>(url: string) => {
  const [state, setState] = useState<PostState<R>>({
    data: null,
    loading: false,
    error: null,
  });

  const postData = async (data: T) => {
    setState({ data: null, loading: true, error: null });

    try {
      const response: AxiosResponse<R> = await axios.post(url, data);
      setState({ data: response.data, loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error: error as AxiosError });
    }
  };

  return { ...state, postData };
};

export default usePostData;

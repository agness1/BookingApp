import { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

interface PostState<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  status: number | null; 
}

const UsePostData = <T, R = any>(url: string) => {
  const [state, setState] = useState<PostState<R>>({
    data: null,
    loading: false,
    error: null,
    status: null, 
  });

  const postData = async (data: T) => {
    setState({ data: null, loading: true, error: null, status: null });

    try {
      const response: AxiosResponse<R> = await axios.post(url, data);
      setState({ 
        data: response.data, 
        loading: false, 
        error: null, 
        status: response.status 
      });
    } catch (error) {
      setState({ 
        data: null, 
        loading: false, 
        error: error as AxiosError, 
        status: (error as AxiosError).response?.status || null 
      });
    }
  };

  return { ...state, postData };
};

export default UsePostData;
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await axios(url, { cancelToken: source.token });
        // console.log(res.data);
        setData(res.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

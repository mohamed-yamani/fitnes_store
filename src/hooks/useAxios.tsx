import { useEffect, useState } from "react";

type responseType = {
  data: [];
  status: number;
  statusText: string;
};

interface configObjProps {
  axiosInstance: any;
  method: string;
  endpoint: string;
  requestConfig?: Object;
}

const useAxios = (configObj: configObjProps) => {
  const { axiosInstance, method, endpoint, requestConfig = {} } = configObj;

  const [stateresponse, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    // window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response: responseType = await axiosInstance[
          method.toLowerCase()
        ](endpoint, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // ! useEffect cleanup function ! \\
    return () => controller.abort();
  }, [axiosInstance, method, endpoint, requestConfig]);
  return [stateresponse, error, loading];
};

export default useAxios;

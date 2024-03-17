import { baseUrl } from "@/utils/constants";
import { useEffect, useState } from "react";

interface useApiProps {
  url: string;
  onSuccess?: () => void;
  onError?: () => void;
}

interface apiResponse<T> {
  data?: T;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const useApi = <B>({
  url,
  onError,
  onSuccess,
}: useApiProps): apiResponse<B> => {
  const [isLoading, setIsloading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<B>();
  useEffect(() => {
   if(url)
    setIsloading(true)
    fetch(`${baseUrl}${url}`)
      .then((res)=>res.json())
      .then((res:B)=>{
        setData(res)
        setIsSuccess(true)
        if(onSuccess) onSuccess()
      })
      .catch((err)=>{
        console.log(err)
        setIsSuccess(false)
        setData(undefined)
        if(onError) onError()
      })
      .finally(() => setIsloading(false));
  }, [url]);
  return {
    data, isLoading, isSuccess
  };
};

export default useApi;

import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";
interface fetchresponse<T>
{
    count : number;
    results : T[]
}
const useData = <T>(endpoint : string) =>{
const [data, setdata] = useState<T[]>([]); // for storing game objects
  const [error, seterror] = useState("");
  const [isLoading,setLoading] = useState(false)
  //set to send a fetch request to the backend we use useEffect
  useEffect(() => {
    const controller = new AbortController(); // handle cancellations
    setLoading(true)
    apiClient
      .get<fetchresponse<T>>(endpoint,{signal : controller.signal})
      .then((res) =>{ 
        setdata(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        seterror(err.message)
        setLoading(false)
      }); //shape of res interface object get from webiste in list of games
      return () => controller.abort()
  },[]);  //forgot to add dep array
  return {data,error,isLoading} 
}
// separate functionality for loading games separte concern
export default useData
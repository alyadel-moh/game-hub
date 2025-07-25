import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
interface fetchresponse<T>
{
    count : number;
    results : T[]
}
// requestconfig optional not always have to pass it
// we don't know type of array of  dep
const useData = <T>(endpoint : string , requestConfig?: AxiosRequestConfig,deps? : any[]) =>{
const [data, setdata] = useState<T[]>([]); // for storing game objects
  const [error, seterror] = useState("");
  const [isLoading,setLoading] = useState(false)
  //set to send a fetch request to the backend we use useEffect
  useEffect(() => {
    const controller = new AbortController(); // handle cancellations
    setLoading(true)
    apiClient
      .get<fetchresponse<T>>(endpoint,{signal : controller.signal,...requestConfig} )// takes object or string or any param as sec argument
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
  },deps ? [...deps] : []);  //array of dep when selected genre changes we send another request to get game match selected genre
  // as dep is optional it can be undefined and we canot spread undefined object
  return {data,error,isLoading} 
}
// separate functionality for loading games separte concern
export default useData
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";
interface Genre {
    id : number;
    name : string
}
interface fetchgenresresponse
{
    count : number;
    results : Genre[]
}
const useGenres = () =>{
const [genres, setgenres] = useState<Genre[]>([]); // for storing game objects
  const [error, seterror] = useState("");
  const [isLoading,setLoading] = useState(false)
  //set to send a fetch request to the backend we use useEffect
  useEffect(() => {
    const controller = new AbortController(); // handle cancellations
    setLoading(true)
    apiClient
      .get<fetchgenresresponse>("/genres",{signal : controller.signal})
      .then((res) =>{ 
        setgenres(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        seterror(err.message)
        setLoading(false)
      }); //shape of res interface object get from webiste in list of games
      return () => controller.abort()
  },[]);  //forgot to add dep array
  return {genres,error,isLoading} 
}
// separate functionality for loading games separte concern
export default useGenres
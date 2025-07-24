import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";
export interface Platform{
  id :number;
  name:string;
  slug :string
}
export interface Game {
  id: number;
  name: string;
  background_image : string
  parent_platforms : {platform : Platform}[]
  metacritic : number;
}
interface fetchgamesresponse {
  count: number;
  results: Game[];
}
const useGames = () => {
const [games, setgames] = useState<Game[]>([]); // for storing game objects
  const [error, seterror] = useState("");
  //set to send a fetch request to the backend we use useEffect
  useEffect(() => {
    const controller = new AbortController(); // handle cancellations
    apiClient
      .get<fetchgamesresponse>("/games",{signal : controller.signal})
      .then((res) => setgames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        seterror(err.message)
      }); //shape of res interface object get from webiste in list of games
      return () => controller.abort()
  },[]);  //forgot to add dep array
  return {games,error} 
}
// separate functionality for loading games separte concern
export default useGames
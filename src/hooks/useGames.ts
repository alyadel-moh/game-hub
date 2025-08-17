import { useQuery } from "@tanstack/react-query";
import type { gameQuery } from "../App";
import type { Platform } from "./usePlatforms";
import APIClient, { type fetchresponse } from "../api-client";

export interface Game {
  id: number;
  name: string;
  background_image : string
  parent_platforms : {platform : Platform}[]
  metacritic : number;
  rating_top :number
}

const useGames =(gamequery : gameQuery) => useQuery<fetchresponse<Game>,Error>({
   queryKey : ['games',gamequery],
  queryFn :() => new APIClient<Game>("/games").getAll({params  : {genres : gamequery.genre?.id,parent_platforms : gamequery.platform?.id,ordering : gamequery.sortOrder,search : gamequery.searchText}})
  // function hena 3lshan games bet88yr so when changing games function is called to fetch
})
export default useGames   // pass gameQuery object any time object changes we need tpp  refresh data
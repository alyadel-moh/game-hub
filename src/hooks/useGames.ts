import { useQuery } from "@tanstack/react-query";
import type { gameQuery } from "../App";
import apiClient, { type fetchresponse } from "../api-client";
import type { Platform } from "./usePlatforms";

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
  queryFn : () => apiClient.get<fetchresponse<Game>>("/games",{params  : {genres : gamequery.genre?.id,parent_platforms : gamequery.platform?.id,ordering : gamequery.sortOrder,search : gamequery.searchText}}).then(res => res.data)
})
export default useGames   // pass gameQuery object any time object changes we need tpp  refresh data
import { keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";
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

const useGames =(gamequery : gameQuery) => useInfiniteQuery<fetchresponse<Game>,Error>({
   queryKey : ['games',gamequery],
  queryFn :({pageParam}) => new APIClient<Game>("/games").getAll({params  : {genres : gamequery.genre?.id,parent_platforms : gamequery.platform?.id,ordering : gamequery.sortOrder,search : gamequery.searchText,page : pageParam}}),
  // function hena 3lshan games bet88yr so when changing games function is called to fetch
  initialPageParam : 1,
  placeholderData : keepPreviousData,
  getNextPageParam : (lastpage,allpages) => {
    return lastpage.next ? allpages.length+1 : undefined
  }
})
export default useGames   // pass gameQuery object any time object changes we need tpp  refresh data
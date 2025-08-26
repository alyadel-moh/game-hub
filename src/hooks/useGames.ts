import { keepPreviousData, useInfiniteQuery} from "@tanstack/react-query";

import type { Game } from "../entites/Game";
import APIClient, { type fetchresponse } from "../api-client";
import ms from "ms";
import useGameQueryStore from "../store";
const useGames =() => {
  const gamequery = useGameQueryStore(s => s.gamequery) //if any of gamequery values changes this comp will rerender
  return  useInfiniteQuery<fetchresponse<Game>,Error>({
   queryKey : ['games',gamequery],
  queryFn :({pageParam}) => new APIClient<Game>("/games").getAll({params  : {genres : gamequery.genreId,parent_platforms : gamequery.platformId,ordering : gamequery.sortOrder,search : gamequery.searchText,page : pageParam}}),
  // function hena 3lshan games bet88yr so when changing games function is called to fetch
  initialPageParam : 1,
  placeholderData : keepPreviousData,
  getNextPageParam : (lastpage,allpages) => {
    return lastpage.next ? allpages.length+1 : undefined
  },
  staleTime : ms('24h')
})
}
export default useGames   // pass gameQuery object any time object changes we need tpp  refresh data
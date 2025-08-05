import type { gameQuery } from "../App";
import useData from "./useData";
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
  rating_top :number
}

const useGames = (gamequery : gameQuery) => useData<Game>('/games',{params  : {genres : gamequery.genre?.id,platforms : gamequery.platform?.id,ordering : gamequery.sortOrder,search : gamequery.searchText}} ,[gamequery]) //object params cont inside object set genres to selectedgenre.id you can see it gameslist in website rawg.io and array of dependencies
export default useGames   // pass gameQuery object any time object changes we need tpp  refresh data
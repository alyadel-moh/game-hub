import useData from "./useData";
import type { Genre } from "./UseGenres";
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

const useGames = (selectedGenre : Genre | null) => useData<Game>('/games',{params  : {genres : selectedGenre?.id}} ,[selectedGenre?.id]) //object params cont inside object set genres to selectedgenre.id you can see it gameslist in website rawg.io
export default useGames
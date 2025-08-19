import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../api-client";
export interface Genre {
    id : number;
    name : string
    image_background : string
}
const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn :  new APIClient<Genre>('/genres').getAll,
    staleTime : 24*60*60*1000,  // high stale time as genres hardly ever changes
    initialData : {count : genres.length , results : genres,next : null}
})  // hiding this details inside usegenres hook
export default useGenres
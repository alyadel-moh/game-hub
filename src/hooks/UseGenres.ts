import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../api-client";
import  ms from 'ms'
export interface Genre {
    id : number;
    name : string
    image_background : string
}
const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn :  new APIClient<Genre>('/genres').getAll,
    staleTime : ms('24h'),  // high stale time as genres hardly ever changes
   initialData : genres
})  // hiding this details inside usegenres hook
export default useGenres
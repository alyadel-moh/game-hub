import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../api-client";
import type { Genre } from "../entites/Genre";
import  ms from 'ms'

const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn :  new APIClient<Genre>('/genres').getAll,
    staleTime : ms('24h'),  // high stale time as genres hardly ever changes
   initialData : genres
})  // hiding this details inside usegenres hook
export default useGenres
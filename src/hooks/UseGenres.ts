import { useQuery } from "@tanstack/react-query";
import apiClient, { type fetchresponse } from "../api-client";
import genres from "../data/genres";
export interface Genre {
    id : number;
    name : string
    image_background : string
}
const useGenres = () => useQuery({
    queryKey : ['genres'],
    queryFn : () => apiClient.get<fetchresponse<Genre>>('/genres').then(res => res.data),
    staleTime : 24*60*60*1000,  // high stale time as genres hardly ever changes
    initialData : {count : genres.length , results : genres}
})  // hiding this details inside usegenres hook
export default useGenres
import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import type  Game  from "../entites/Game";
const apiclient = new APIClient<Game>("/games")
const useGame = (slug : string) => useQuery({
    
    queryKey : ['games',slug],
    queryFn :  () => apiclient.get(slug)
})
export default useGame
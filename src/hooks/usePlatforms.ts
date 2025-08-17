import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient, { type fetchresponse } from '../api-client'
export interface Platform {
    id : number
    name : string
    slug : string
}
const usePlatforms = () => (useQuery({
    queryKey : ['platforms'],
    queryFn : () => apiClient.get<fetchresponse<Platform>>('/platforms/lists/parents').then(res => res.data),
      staleTime : 24*60*60*1000,  // high stale time as genres hardly ever changes
        initialData : {count : platforms.length , results : platforms}
}))

export default usePlatforms
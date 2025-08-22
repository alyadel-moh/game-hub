import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../api-client'
import ms from 'ms'
export interface Platform {
    id : number
    name : string
    slug : string
}
const usePlatforms = () => (useQuery({
    queryKey : ['platforms'],
    queryFn : new APIClient<Platform>('/platforms/lists/parents').getAll,
      staleTime : ms('24h'),  // high stale time as genres hardly ever changes
       initialData :platforms
}))

export default usePlatforms
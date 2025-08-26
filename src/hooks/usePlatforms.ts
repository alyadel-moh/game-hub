import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../api-client'
import ms from 'ms'
import type { Platform } from '../entites/Platfrom'
const usePlatforms = () => (useQuery({
    queryKey : ['platforms'],
    queryFn : new APIClient<Platform>('/platforms/lists/parents').getAll,
      staleTime : ms('24h'),  // high stale time as genres hardly ever changes
       initialData :platforms
}))

export default usePlatforms
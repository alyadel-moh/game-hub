import APIClient from '../api-client'
import type { Screenshot } from '../entites/Screenshot'
import { useQuery } from '@tanstack/react-query'
const useScreenshots = (gameId : number) => {
    const apiClient= new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
  return useQuery({
    queryKey : ['screenshots',gameId],
    queryFn : apiClient.getAll
  })
}

export default useScreenshots
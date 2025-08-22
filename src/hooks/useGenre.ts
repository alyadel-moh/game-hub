
import useGenres from './UseGenres';
const useGenre = (genreid ?: number) => {
  const { data: genres } = useGenres();
   return genres?.results.find((g) => g.id === genreid);
}

export default useGenre
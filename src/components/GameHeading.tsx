import { Heading } from "@chakra-ui/react";
import type { gameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface props {
  gamequery: gameQuery;
}
const GameHeading = ({ gamequery }: props) => {
  const genre = useGenre(gamequery.genreId);
  const platform = usePlatform(gamequery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

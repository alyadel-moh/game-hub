import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";
const GameHeading = () => {
  //const { gamequery } = useGameQueryStore(); comp wil rerender if any of 4 props change  this is not efficent
  const genreId = useGameQueryStore((s) => s.gamequery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore((s) => s.gamequery.platformId);
  const platform = usePlatform(platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

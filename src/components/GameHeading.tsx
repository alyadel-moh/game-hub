import { Heading } from "@chakra-ui/react";
import type { gameQuery } from "../App";
interface props {
  gamequery: gameQuery;
}
const GameHeading = ({ gamequery }: props) => {
  const heading = `${gamequery.platform?.name || ""} ${
    gamequery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

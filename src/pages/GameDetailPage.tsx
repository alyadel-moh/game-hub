import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandabletext from "../components/Expandabletext";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import Gamescreenshot from "../components/Gamescreenshot";

const GameDetailPage = () => {
  const { slug } = useParams(); // read url from current route
  const { data: game, isLoading, error } = useGame(slug!); //! means const will never be null
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <Expandabletext>{game.description_raw}</Expandabletext>
        <GameAttributes game={game} />
      </GridItem>
      {/* or box  */}
      <GridItem>
        <GameTrailer gameId={game.id} />
        <Gamescreenshot gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;

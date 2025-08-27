import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Expandabletext from "../components/Expandabletext";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams(); // read url from current route
  const { data: game, isLoading, error } = useGame(slug!); //! means const will never be null
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <Expandabletext>{game.description_raw}</Expandabletext>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;

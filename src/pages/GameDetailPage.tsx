import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Expandabletext from "../components/Expandabletext";
import Definitionitem from "../components/Definitionitem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

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
    </>
  );
};

export default GameDetailPage;

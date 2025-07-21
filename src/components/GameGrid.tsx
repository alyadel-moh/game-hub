import React, { useEffect, useState } from "react";
import apiClient from "../api-client";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface fetchgamesresponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setgames] = useState<Game[]>([]); // for storing game objects
  const [error, seterror] = useState("");
  //set to send a fetch request to the backend we use useEffect
  useEffect(() => {
    apiClient
      .get<fetchgamesresponse>("/games")
      .then((res) => setgames(res.data.results))
      .catch((err) => seterror(err.message)); //shape of res interface object get from webiste in list of games
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* add to x to /games to make error */}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li> // we render name only for now
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

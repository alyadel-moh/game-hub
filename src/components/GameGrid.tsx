import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCountainer from "./GameCardCountainer";
import type { gameQuery } from "../App";
interface Props {
  gameQuery: gameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; //array with six items each item rendered to skeleton comp
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* add to x to /games to make error */}
      {/* we columns count acc to screen size */}
      {/* padding to not be too close to screen edgess */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardCountainer key={Skeleton}>
              <GameCardSkeleton />
            </GameCardCountainer>
          ))}
        {data.map((game) => (
          <GameCardCountainer key={game.id}>
            <GameCard game={game} />
          </GameCardCountainer>
        ))}
      </SimpleGrid>
    </>
  );
};
// comp doesn't know about making any HTTP request
export default GameGrid;

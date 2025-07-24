import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCountainer from "./GameCardCountainer";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6]; //array with six items each item rendered to skeleton comp
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* add to x to /games to make error */}
      {/* we columns count acc to screen size */}
      {/* padding to not be too close to screen edgess */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardCountainer>
              <GameCardSkeleton key={Skeleton} />
            </GameCardCountainer>
          ))}
        {games.map((game) => (
          <GameCardCountainer>
            <GameCard key={game.id} game={game} />
          </GameCardCountainer>
        ))}
      </SimpleGrid>
    </>
  );
};
// comp doesn't know about making any HTTP request
export default GameGrid;

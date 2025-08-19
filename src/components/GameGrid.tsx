import { Box, SimpleGrid, Text, Button } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCountainer from "./GameCardCountainer";
import type { gameQuery } from "../App";
import React from "react";
interface Props {
  gameQuery: gameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; //array with six items each item rendered to skeleton comp
  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((Skeleton) => (
            <GameCardCountainer key={Skeleton}>
              <GameCardSkeleton />
            </GameCardCountainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardCountainer key={game.id}>
                <GameCard game={game} />
              </GameCardCountainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={4} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading...." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
// comp doesn't know about making any HTTP request
export default GameGrid;

import { SimpleGrid, Text, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCountainer from "./GameCardCountainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6]; //array with six items each item rendered to skeleton comp
  if (error) return <Text>{error.message}</Text>;
  const fetchgamescount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; //total number of games fetched
  // !! converts to a boolean value
  return (
    // <Box padding="10px">
    <InfiniteScroll
      dataLength={fetchgamescount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
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
    </InfiniteScroll>
    // {hasNextPage && (
    //<Button marginY={4} onClick={() => fetchNextPage()}>
    //   {isFetchingNextPage ? "Loading...." : "Load More"}
    // </Button>
    //  )}
    // </Box>
  );
};
// comp doesn't know about making any HTTP request
export default GameGrid;

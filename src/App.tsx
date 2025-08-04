import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import Sortselector from "./components/sortselector";
export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
const App = () => {
  const [gameQuery, setgameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr", // one fraction which means column stretches and takes all available space
        lg: "200px 1fr", // second column which is grid stretches and takes up all the avaialable space
      }} // if 200px is not present each column would take 50% of the screen
    >
      {/* singlecolumn nav and main no aside for mob devices */}
      {/* for large devices we use 2 columns 1024px */}
      <GridItem area="nav">
        {/*background-color is coral  */}
        <NavBar />
      </GridItem>
      {/* aside only for large devices */}
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
          />
          {/* function takes a genre object from gridlist as parameter and calls setselectedgenre in its body */}
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          {/* padding to be lined with first game card  margin button to not be too close to cards*/}
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onselectplatform={(platform) =>
              setgameQuery({ ...gameQuery, platform })
            }
          />
          <Sortselector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

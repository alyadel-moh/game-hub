import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import Sortselector from "./components/Sortselector";
import GameHeading from "./components/GameHeading";
const App = () => {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          {/* bos to modify in a single place */}
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            {/* padding to be lined with first game card  margin button to not be too close to cards*/}
            <PlatformSelector />
            <Sortselector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

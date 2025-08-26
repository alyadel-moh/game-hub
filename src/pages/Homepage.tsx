import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import Sortselector from "../components/Sortselector";
import GameHeading from "../components/GameHeading";
const App = () => {
  return (
    <Grid
      templateAreas={{ base: ` "main"`, lg: `"aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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

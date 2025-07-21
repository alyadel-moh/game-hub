import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      {/* singlecolumn nav and main no aside for mob devices */}
      {/* for large devices we use 2 columns 1024px */}
      <GridItem area="nav">
        {/*background-color is coral  */}
        <NavBar />
      </GridItem>
      {/* aside only for large devices */}
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

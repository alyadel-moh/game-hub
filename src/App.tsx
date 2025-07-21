import { Grid, GridItem } from "@chakra-ui/react";
import { Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  const showAside = useBreakpointValue({ base: false, lg: true }); // true if screen ≥ lg
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
      <Show when={showAside}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

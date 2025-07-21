import { Grid, GridItem } from "@chakra-ui/react";
import { Show, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const App = () => {
  const showAside = useBreakpointValue({ base: false, lg: true }); // true if screen ≥ lg
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      {/* singlecolumn nav and main no aside for mob devices */}
      {/* for large devices we use 2 columns 1024px */}
      <GridItem area="nav" bg="coral">
        {/*background-color is coral  */}
        Nav
      </GridItem>
      <GridItem area="nav" bg="coral">
        Nav
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
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/UseGenres";
const App = () => {
  const [selectedgenre, setselectedgenre] = useState<Genre | null>(null);
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
            selectedGenre={selectedgenre}
            onSelectGenre={(genre) => setselectedgenre(genre)}
          />
          {/* function takes a genre object from gridlist as parameter and calls setselectedgenre in its body */}
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedgenre} />
      </GridItem>
    </Grid>
  ); // create 2 columns
};

export default App;

import useGenres from "../hooks/UseGenres";
import type { Genre } from "../hooks/UseGenres";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../image-url";
interface props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: props) => {
  const { data, isLoading, error } = useGenres(); // prop called data
  if (error) return null; // malosh lazma
  if (isLoading) return <Spinner />; // malosh lazma
  return (
    <>
      <Box paddingLeft={4}>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {/*list used to render items without bullet points */}
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  objectFit="cover" //to make all images scaled to fill the container
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal" //as massive player is overlapping
                  textAlign="left" // to make all the text to left in same line
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)} // when genre is clicked the child (genrelist) notify parent which one is clicked to store it
                  fontSize="lg"
                  variant="link"
                >
                  {/* variant button look like links */}
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenreList;

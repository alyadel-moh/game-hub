import React from "react";
import useGenres from "../hooks/UseGenres";
import type { Genre } from "../hooks/UseGenres";
import {
  Button,
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
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {/*list used to render items without bullet points */}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
  );
};

export default GenreList;

import React from "react";
import useGenres from "../hooks/UseGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../image-url";
const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

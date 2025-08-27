import type { Game } from "../entites/Game";
import { SimpleGrid } from "@chakra-ui/react";
import Definitionitem from "./Definitionitem";
import CriticScore from "./CriticScore";
import { Text } from "@chakra-ui/react";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      {/* dl means definition list  */}
      <Definitionitem term="platfroms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
          // {game.parent_platforms?.map((p) => (
          // <Text>{p.platform.name}</Text>
        ))}
      </Definitionitem>
      <Definitionitem term="Metascore">
        <CriticScore score={game.metacritic} />
      </Definitionitem>
      <Definitionitem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </Definitionitem>
      <Definitionitem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </Definitionitem>
    </SimpleGrid>
  );
};

export default GameAttributes;

import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../image-url";
interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    // overflow to get rounded corners on top
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* // constructing an array of platform objects */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

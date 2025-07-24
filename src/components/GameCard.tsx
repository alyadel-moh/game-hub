import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatfromIconList";
interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    // overflow to get rounded corners on top
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {/* // constructing an array of platform objects */}
      </CardBody>
    </Card>
  );
};

export default GameCard;

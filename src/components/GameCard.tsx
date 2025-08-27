import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import type Game from "../entites/Game";
import PlatformIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    // overflow to get rounded corners on top
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* // constructing an array of platform objects */}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

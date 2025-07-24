import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : ""} //colorscheme means foreground background entire card border shadows
      // color means foreground
    >
      {score}
    </Badge>
  ); // 1 means 4px  border radious to make frame round
};

export default CriticScore;

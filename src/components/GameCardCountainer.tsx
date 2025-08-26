import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardCountainer = ({ children }: Props) => {
  return (
    <Box
      width="100%"
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardCountainer;
//singleplace for basic styles for the card

import { Box, Heading } from "@chakra-ui/react";
import { type ReactNode } from "react";
interface props {
  term: string;
  children: ReactNode | ReactNode[];
}
const Definitionitem = ({ term, children }: props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default Definitionitem;

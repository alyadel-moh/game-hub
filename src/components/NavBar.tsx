import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //logo or any name doesn't matter
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      {/* horizontal stack add items from left to right */}
    </HStack>
  );
};

export default NavBar;

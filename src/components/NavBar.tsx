import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //logo or any name doesn't matter
import Colormodeswitch from "./Colormodeswitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {/* //justify content to move switch to right side and apply padding as it is so close to right of screen*/}
      <Image src={logo} boxSize="60px" />
      <Colormodeswitch />
      {/* horizontal stack add items from left to right */}
    </HStack>
  );
};

export default NavBar;

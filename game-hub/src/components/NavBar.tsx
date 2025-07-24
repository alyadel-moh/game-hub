import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //logo or any name doesn't matter
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
    </HStack>
  );
};

export default NavBar;

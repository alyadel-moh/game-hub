import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"; //logo or any name doesn't matter
import Colormodeswitch from "./Colormodeswitch";
import SearchInput from "./SearchInput";
interface props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: props) => {
  return (
    <HStack padding="10px">
      {/* space removed as it isnot ness between three componenets */}
      {/* //justify content to move switch to right side and apply padding as it is so close to right of screen*/}
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <Colormodeswitch />
      {/* horizontal stack add items from left to right */}
    </HStack>
  );
};

export default NavBar;

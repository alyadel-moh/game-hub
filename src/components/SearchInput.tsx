import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      {/* search icon */}
      <Input
        borderRadius={20}
        placeholder="search games...."
        variant="filled"
      ></Input>
      {/* variant to make search box nicer */}
    </InputGroup>
  );
};
export default SearchInput;

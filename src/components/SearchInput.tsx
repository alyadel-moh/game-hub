import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText); // comp is depenendt only on this func
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        {/* search icon */}
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search games...."
          variant="filled"
        ></Input>
        {/* variant to make search box nicer */}
      </InputGroup>
    </form>
  );
};
export default SearchInput;

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
interface prop {
  onselectplatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onselectplatform, selectedPlatformId }: prop) => {
  const { data, error } = usePlatforms();
  const platform = data.results.find((p) => p.id === selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onselectplatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu> // you can read more about menu deh mesh hagat m7foza
  );
};

export default PlatformSelector;

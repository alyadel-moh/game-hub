import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface props {
  onSelectsortorder: (sortorder: string) => void;
  sortOrder: string;
}
const Sortselector = ({ onSelectsortorder, sortOrder }: props) => {
  const sortorders = [
    { value: "", label: "Relevance" }, // value emty as it is default
    { value: "-added", label: "Data added" }, // -added as newest games is first
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentsortOrder = sortorders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentsortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortorders.map((order) => (
          <MenuItem
            onClick={() => onSelectsortorder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu> // you can read more about menu deh mesh hagat m7foza
  );
};

export default Sortselector;

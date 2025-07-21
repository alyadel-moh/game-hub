import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const Colormodeswitch = () => {
  const { toggleColorMode, colorMode } = useColorMode(); //to switch bet color modes we use hook useColorMode second one is current color mode
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      />
      {/* switch is on when dark mode (ischecked)   color scheme is switch color*/}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default Colormodeswitch;

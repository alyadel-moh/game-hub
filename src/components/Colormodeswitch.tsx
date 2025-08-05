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
      <Text whiteSpace="nowrap">Dark Mode</Text>
      {/* whitespace as dark was in aline in mode in the next line after adding search box */}
    </HStack>
  );
};

export default Colormodeswitch;

import type { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs"; //bootstrap
import type { IconType } from "react-icons/lib";
interface Props {
  platforms: Platform[];
}
const PlatfromIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // index signiture array and each key is mapped to an icontype
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" /> //500 is the chade of green color go to default theme in style system in chakra browser
      ))}
    </HStack>
  );
};

export default PlatfromIconList;

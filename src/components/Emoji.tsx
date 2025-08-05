import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";
interface props {
  rating: number;
}
const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;
  const emojimMap: { [key: number]: ImageProps } = {
    // image props to define the availabe props for the image component
    // to tell compiler compiler that this object can have any number of keys and the keys are numbers
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojimMap[rating]} marginTop={1} />; // as we are spreading object these props will be added to the image component
};

export default Emoji;

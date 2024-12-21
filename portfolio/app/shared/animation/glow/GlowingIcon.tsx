/** @jsxImportSource @emotion/react */
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import { LiaUserCircle } from "react-icons/lia";
import { IconType } from "react-icons";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { BsBook } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";
const GlowingIcon = ({ Color, Icon } : { Color: string, Icon: string }) => {
const iconMapping: { [key: string]: IconType } = {
    "LiaUserCircle": LiaUserCircle,
    "PiSuitcaseSimpleFill": PiSuitcaseSimpleFill,
    "BsBook": BsBook,
    "RiContactsBook3Line": RiContactsBook3Line,
  }

    const IconComponent = iconMapping[Icon];
  // Glowing Animation with Smaller Glow
  const glow = keyframes`
    0% {
      box-shadow: 0 0 5px var(--color-${Color}), 0 0 10px var(--color-${Color}), 0 0 15px var(--color-${Color});
    }
    50% {
      box-shadow: 0 0 10px var(--color-${Color}), 0 0 15px var(--color-${Color}), 0 0 20px var(--color-${Color});
    }
    100% {
      box-shadow: 0 0 5px var(--color-${Color}), 0 0 10px var(--color-${Color}), 0 0 15px var(--color-${Color});
    }
  `;

  const smSizeIcons = ["RiContactsBook3Line", "BsBook"]
  return (
    <Box
      as="span"
      display="inline-block"
      boxSize="8"
      color={`var(--color-${Color})`}
      p={smSizeIcons.includes(Icon) ? 1.5 : 1}
      css={{
        animation: `${glow} 2s infinite`,
        borderRadius: "50%",
      }}
    >
      <IconComponent size="100%" />
    </Box>
  );
};

export default GlowingIcon;

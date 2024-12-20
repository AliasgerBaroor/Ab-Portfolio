/** @jsxImportSource @emotion/react */
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { LiaUserCircle } from "react-icons/lia";

// Glowing Animation with Smaller Glow
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px var(--color-green), 0 0 10px var(--color-green), 0 0 15px var(--color-green);
  }
  50% {
    box-shadow: 0 0 10px var(--color-green), 0 0 15px var(--color-green), 0 0 20px var(--color-green);
  }
  100% {
    box-shadow: 0 0 5px var(--color-green), 0 0 10px var(--color-green), 0 0 15px var(--color-green);
  }
`;

const GlowingIcon = () => {
  return (
    <Box
      as="span"
      display="inline-block"
      boxSize="8"
      color="var(--color-green)"
      css={{
        animation: `${glow} 2s infinite`,
        borderRadius: "50%",
      }}
    >
      <LiaUserCircle size="100%" />
    </Box>
  );
};

export default GlowingIcon;

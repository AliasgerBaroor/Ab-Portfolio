import { Box, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
// Glowing Animation
const glow = keyframes`
  0% {
    box-shadow: 0 0 10px var(--color-white), 0 0 20px var(--color-white), 0 0 30px var(--color-white);
  }
  50% {
    box-shadow: 0 0 20px var(--color-white), 0 0 30px var(--color-white), 0 0 40px var(--color-white);
  }
  100% {
    box-shadow: 0 0 10px var(--color-white), 0 0 20px var(--color-white), 0 0 30px var(--color-white);
  }
`;

const GlowingDivider = () => {
  return (
    <Flex align="center" my={8}>
      {/* Glowing Strip */}
      <Box
        h="4px"
        w="30px"
        bg="var(--color-white)"
        borderRadius="md"
        animation={`${glow} 2s infinite`}
      />
      {/* Divider Line */}
      <Box
        h="2px"
        flex="1"
        bg="gray.500"
        ml={2}
      />
    </Flex>
  );
};

export default GlowingDivider;

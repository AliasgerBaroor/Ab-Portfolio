import { Box, Icon } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ChevronDown } from "lucide-react";

// Animation keyframes for smooth vertical movement with color dimming
const slideVertical = keyframes`
  0% { transform: translateY(0); opacity: 1; color: #fff; }
  50% { transform: translateY(10px); opacity: 0; color: gray; }
  100% { transform: translateY(0); opacity: 1; color: #fff; }
`;

// Animation styles
const animation = `${slideVertical} 1.5s infinite ease-in-out`;

export default function ChevronAnimation() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={16}>
      <Box animation={animation} as="span" color="black">
        <Icon boxSize={8}>
          <ChevronDown />
        </Icon>
      </Box>
      <Box animation={animation} animationDelay="0.5s" as="span" color="black">
        <Icon boxSize={8}>
          <ChevronDown />
        </Icon>
      </Box>
      <Box animation={animation} animationDelay="1s" as="span" color="black">
        <Icon boxSize={8}>
          <ChevronDown />
        </Icon>
      </Box>
    </Box>
  );
}

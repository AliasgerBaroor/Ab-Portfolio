import { Card, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowRight, BsChevronRight } from "react-icons/bs";

const AnimatedCardDescription = ({ setProjectVisited, itemName }: { setProjectVisited: React.Dispatch<React.SetStateAction<string>>, itemName: string}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card.Description
      color={"var(--color-white)"}
      fontSize={"2xl"}
      display={"flex"}
      alignItems={"center"}
      gap={2}
      style={{ position: "relative", cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setProjectVisited(itemName)}
    >
      <span
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          transition: "color 0.3s ease",
          color: isHovered ? "var(--color-cyan)" : "var(--color-white)",
        }}
      >
        learn more
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            background: "var(--color-cyan)",
            width: isHovered ? "100%" : "0",
            transition: "width 0.3s ease",
          }}
        ></span>
      </span>
      <IconButton
        size={"md"}
        style={{
          display: "inline-block",
          transition: "transform 0.3s ease",
          color: isHovered ? "var(--color-cyan)" : "var(--color-white)",
        }}
      >
        { isHovered ? (
        <BsArrowRight />
        ) : (
        <BsChevronRight />
        )
    }
      </IconButton>
    </Card.Description>
  );
};

export default AnimatedCardDescription;

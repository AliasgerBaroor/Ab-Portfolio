import { Box, Card, Highlight, Image, Link } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import work1 from "~/assets/images/work-1.png"
import work2 from "~/assets/images/work-2.png"

  const glow = keyframes`
    0% {
      box-shadow: 0 0 5px var(--color-pink), 0 0 10px var(--color-pink), 0 0 15px var(--color-pink);
    }
    50% {
      box-shadow: 0 0 10px var(--color-pink), 0 0 15px var(--color-pink), 0 0 20px var(--color-pink);
    }
    100% {
      box-shadow: 0 0 5px var(--color-pink), 0 0 10px var(--color-pink), 0 0 15px var(--color-pink);
    }
  `;
const WorkCards = ({ cardText, cardQuery, cardLink, cardImage }: { cardText: string, cardQuery: string[], cardLink: string[], cardImage: string }) => {
  return (

      <Card.Root flexDirection="row" overflow="hidden" w="100%" mt={8} style={{
        borderColor: "var(--color-pink)",
        borderWidth: "1px",
      }}    css={{
        animation: `${glow} 2s infinite`,
      }}>
    <Image
      objectFit="cover"
      maxW="200px"
      src={cardImage === "work1" ? work1 : cardImage === "work2" ? work2 : "other"}
      alt="Caffe Latte"
    />
    <Box background={"#1b2133"} w={"100%"}>
      <Card.Body>
        <Card.Title mb="2" color={"var(--color-white)"}><Highlight query={cardQuery} styles={{ px: "0.5", color: "var(--color-cyan)" }}>{ cardText }</Highlight></Card.Title>
      </Card.Body>
      <Card.Footer>
      <Link
        variant="underline"
        href={ cardLink[0] }
        color={"var(--color-cyan)"}
      >
        { cardLink[1] } &gt; 
      </Link>
      </Card.Footer>
    </Box>
  </Card.Root>
  )
}

export default WorkCards
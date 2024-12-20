import { Flex } from "@chakra-ui/react"
import Github from "./Icon-buttons/Github"
import Linkedin from "./Icon-buttons/LinkedIn"
import { Button } from "~/components/ui/button"

const CTAButtons = ({ addTab }: {addTab: () => void}) => {
  return (
    <Flex alignItems={"center"} position={"relative"} zIndex={2} >
    <Github />
    <Linkedin />
    <Button onClick={addTab} ms={2} rounded={24} variant={"subtle"} size={"sm"} position={"relative"} zIndex={2} >Contact me -&gt;</Button>
  </Flex>
  )
}

export default CTAButtons
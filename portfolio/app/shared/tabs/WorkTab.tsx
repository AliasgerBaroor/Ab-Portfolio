import { Box } from "@chakra-ui/react"
import TopicHeader from "../headers/TopicHeader"
import GlowingDivider from "../animation/glow/Devider"

const WorkTab = () => {
  return (
    <Box>
        <GlowingDivider />
        <TopicHeader Color="pink" Icon={"PiSuitcaseSimpleFill"} HText={"About My Work"} />
    </Box>
  )
}

export default WorkTab
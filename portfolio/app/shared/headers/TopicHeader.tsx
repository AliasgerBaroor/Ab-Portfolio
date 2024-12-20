import { Flex, Text } from "@chakra-ui/react"
import GlowingIcon from "../animation/glow/GlowingIcon"

const TopicHeader = ({ Color, Icon, HText } : { Color: string, Icon: string, HText: string }) => {
  return (
      <Flex alignItems={"center"} gap={3} justifyContent={"start"}><GlowingIcon Color={Color} Icon={Icon} /> <Text fontSize={24} ms={2}>{HText}</Text></Flex>
  )
}

export default TopicHeader
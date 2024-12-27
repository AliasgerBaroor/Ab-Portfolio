import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Status } from '~/components/ui/status'
import TypingEffect from './TypingText'
import CTAButtons from './CTAButtons'
import GlowingDivider from './animation/glow/Devider'
import ScrollChevrons from "./ScrollChevrons";
import TopicHeader from './headers/TopicHeader'
import TopicMainHeading from './headers/TopicMainHeading'
import SkillsTab from './tabs/SkillsTab'
import WorkTab from './tabs/WorkTab'
import ContactTab from './tabs/ContactTab'
import logo from "~/assets/images/logo.jpg"
import { useState } from 'react'
import ReverseProxyBasic from './works/ReverseProxyBasic'
import VSCodePortfolioBasic from './works/VSCodePortfolioBasic'

const SimplePortfolio = ({ addTab }: { addTab: () => void }) => {
  const [projectVisited, setProjectVisited] = useState("ReverseProxy")
  return (
    <Box width={"100%"}>
      { projectVisited === "" ? 
      (
        <Box px={16}>
        <Box pb={20}>
          <Heading size="7xl" position={"relative"} zIndex={2}>Aliasger Bohra 👋</Heading>
          <Heading size="2xl" display={"flex"} position={"relative"} zIndex={2} >Looking for work <Flex ml={2}>
            <Status size={"lg"} value="warning" me={2} position={"relative"} zIndex={2} /> /
            <TypingEffect />
          </Flex></Heading>
          <CTAButtons addTab={addTab} />
          <ScrollChevrons />

        </Box>
        <GlowingDivider />

        {/* About me */}
        <Box>
          <TopicHeader Color="green" Icon={"LiaUserCircle"} HText={"About Me"} />

          <TopicMainHeading TopicText={"I'm a software developer specialized on Web Applications"} TopicHighlight={["software", "developer", "Web", "Applications"]} color={"var(--color-green)"} />

          <Flex alignItems={"center"} my={16} justifyContent={"space-between"}>
            <Box>
              <Text fontSize={24}>Aliasger Bohra (SB Creations)</Text>
              <Text fontSize={16} color={"var(--color-green)"}>Full Stack Web Developer</Text>

              <Text mt={4} maxWidth={"600px"} color={"gray.400"}>
                I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems.
              </Text>
              <Text maxWidth={"600px"} mt={4} color={"gray.400"}>
                After 4 years in this industry I have worked with multiple front-end and back-end technologies.
              </Text>
            </Box>
            <Image
              src={logo}
              boxSize="150px"
              borderRadius="full"
              fit="cover"
              alt="Aliasger Bohra"
            />
          </Flex>

          <Text fontSize={16} color={"var(--color-green)"}>Languages</Text>
          <Flex style={{
            borderTop: "1px solid var(--color-gray)",
            borderBottom: "1px solid var(--color-gray)",
          }} py={4} px={2} maxWidth={"365px"} gap={16} my={4}>
            <Flex gap={2}>
              <Text>Hindi</Text>
              <Text>-</Text>
              <Text color={"gray.400"}>Native</Text>
            </Flex>
            <Flex gap={2}>
              <Text>English</Text>
              <Text>-</Text>
              <Text color={"gray.400"}>Intermediate</Text>
            </Flex>
          </Flex>
          <CTAButtons addTab={addTab} />

        </Box>

        {/* Skills */}
        <GlowingDivider />
        <SkillsTab />

        {/* Works */}
        <GlowingDivider />
        <WorkTab />

        {/* Contact */}
        <GlowingDivider />
        <ContactTab />
      </Box>
      ) : projectVisited === "ReverseProxy" ? <ReverseProxyBasic setProjectVisited={setProjectVisited} /> : projectVisited === "VsCodePortfolio" ? <VSCodePortfolioBasic setProjectVisited={setProjectVisited} /> : "extra" }
        <Box>

        </Box>
        </Box>
  )
}

export default SimplePortfolio
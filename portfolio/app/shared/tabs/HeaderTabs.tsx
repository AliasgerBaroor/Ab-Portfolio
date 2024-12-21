import { Heading, Tabs, Link, Box, Flex, Text, Image } from "@chakra-ui/react"
import { GiPartyPopper } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { CiText } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { CloseButton } from "~/components/ui/close-button";
import { IconType } from "react-icons";
import EditorEmptyState from "../EditorEmptyState";
import { Status } from "~/components/ui/status"
import logo from "~/assets/images/logo.jpg"

import TypingEffect from "../TypingText";
import GlowingDivider from "../animation/glow/Devider";
import TopicHeader from "../headers/TopicHeader";
import WorkTab from "./WorkTab";
import CTAButtons from "../CTAButtons";
import SkillsTab from "./SkillsTab";
import TopicMainHeading from "../headers/TopicMainHeading";
import ScrollChevrons from "../ScrollChevrons";
import ContactTab from "./ContactTab";
import { BsBook } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";

type Item = {
  id: string;
  title: string;
  icon: keyof typeof iconMapping;
  content: React.ReactNode;
}

const iconMapping: { [key: string]: IconType } = {
  GiPartyPopper: GiPartyPopper,
  FaStar: FaStar,
  CiText: CiText,
  RiContactsBook3Line: RiContactsBook3Line,
  BsBook: BsBook,
};

type HeaderTabsProps = {
  addTab: () => void;
  setTabs: React.Dispatch<React.SetStateAction<Item[]>>;
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTab: string | null;
  tabs: Item[];
};

const HeaderTabs: React.FC<HeaderTabsProps> = ({ addTab, setTabs, setSelectedTab, selectedTab, tabs }) => {

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      const newTabs = [...tabs].filter((tab) => tab.id !== id)
      const firstTab = tabs.filter((_, index) => index === 0)
      if (id === firstTab[0].id) {
        const nextTab = tabs.filter((_, index) => index === 1)
        setSelectedTab(nextTab[0].id)

      } else {
        setSelectedTab(firstTab[0].id)
      }
      setTabs(newTabs)
    }
  }

  return (
    <Tabs.Root value={selectedTab}
      onValueChange={(newValue) => setSelectedTab(newValue.value)}
      colorScheme="whiteAlpha" overflowY={"auto"} maxHeight={"600px"}>
      <Tabs.List flex="1 1 auto" bg="var(--bg-sidemenu)" border={"none"}>
        {tabs.map((item) => {
          const IconComponent = iconMapping[item.icon];
          const isAbout = item.title === "About.txt";
          const isSkills = item.title === "Skillset.txt";
          const isContact = item.title === "Contact.txt";
          return (
            <Tabs.Trigger
              value={item.id}
              key={item.id}
              _selected={{
                color: "white",
                bg: "var(--bg-sidemenu)",
                borderBottomWidth: "2px",
                borderBottomColor: "var(--color-blue)",
                borderBottomStyle: "solid",
              }}
              color="gray.400"
            >
              <IconComponent color={isAbout ? "var(--color-yellow)" : isSkills ? "var(--color-purple)" : isContact ? "var(--color-blue)" : ""} />
              {item.title}{" "}
              <CloseButton
                as="span"
                role="button"
                size="2xs"
                me="-2"
                color="gray.400"
                _hover={{
                  bg: "#2e2b2b",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(item.id);
                }}
              />
            </Tabs.Trigger>
          );
        })}
        <Button
          alignSelf="center"
          ms="2"
          size="2xs"
          variant="ghost"
          color="gray.400"
          onClick={addTab}
        >
          <LuPlus /> Add Tab
        </Button>
      </Tabs.List>
      <Tabs.ContentGroup>
        {tabs.map((item: Item) => (
          <Tabs.Content value={item.id} key={item.id} display={"flex"} justifyContent={"center"} px={16} pt={8}>
            {item.title === "Welcome.txt" ? (
              <Box textAlign={"center"}>
                <Heading size="lg" letterSpacing="tight" color={"var(--color-cyan)"}>Welcome Friend!</Heading>
                <Heading size="2xl" letterSpacing="tight">
                  {item.content}
                  <Link
                    variant="underline"
                    href="https://chakra-ui.com"
                    style={{ color: 'var(--color-blue)' }}
                    ms={4}
                  >
                    Basic Version
                  </Link>
                </Heading>
                <EditorEmptyState />
              </Box>
            ) : item.title === "About.txt" ? (
              <Box w={"100%"}>
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

                <ContactTab selectedTab={selectedTab} />
                {/* <Box
                  textAlign={"start"}
                  p={4}
                >
                  <GlowingDivider />

                  <TopicHeader Color="blue" Icon={"RiContactsBook3Line"} HText={"Contact Me"} />

                  <TopicMainHeading TopicText={"Use the code editor below to ask questions or share feedback about my portfolio"} TopicHighlight={["code editor", "questions", "feedback", "portfolio", "projects"]} color={"var(--color-blue)"} />

                  <Box my={8}></Box>

                  <AceEditor
                    value={fileContents[selectedTab!] || ""}
                    mode="javascript"
                    theme="monokai"
                    width="100%"
                    height="200px"
                    onChange={handleEditorChange}
                    name="CodeEditor"
                  />
                  
                  <Heading size={"xl"} my={4}>Example</Heading>
                  <DataListRoot orientation="horizontal">
                    {stats.map((item) => (
                      <DataListItem key={item.label} maxW="xs" label={
                        <Box color="var(--color-gray)" fontSize={"lg"} fontWeight="bold">
                          {item.label}
                        </Box>
                      } value={item.value} />
                    ))}
                  </DataListRoot>
                </Box> */}

              </Box>
            ) : item.title === "Skillset.txt" ? (
              <SkillsTab />
            ) : (
              <ContactTab selectedTab={selectedTab} />
            )}
          </Tabs.Content>
        ))}
      </Tabs.ContentGroup>
    </Tabs.Root>
  )
}

export default HeaderTabs
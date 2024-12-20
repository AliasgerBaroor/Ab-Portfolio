import { Heading, Tabs, Link, Box, Highlight, Flex, Icon, Text, Separator } from "@chakra-ui/react"
import { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { CiText } from "react-icons/ci";
import { LiaUserCircle } from "react-icons/lia";
import { LuPlus } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { CloseButton } from "~/components/ui/close-button";
import { IconType } from "react-icons";
import EditorEmptyState from "../EditorEmptyState";
import { DataListItem, DataListRoot } from "~/components/ui/data-list"
import { Status } from "~/components/ui/status"
import { ProgressBar, ProgressRoot } from "~/components/ui/progress"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import TypingEffect from "../TypingText";
import Github from "../Icon-buttons/Github";
import Linkedin from "../Icon-buttons/LinkedIn";
import GlowingDivider from "../animation/glow/Devider";
import GlowingIcon from "../animation/glow/UserIcon";

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
  FaPhoneAlt: FaPhoneAlt,
};


const stats = [
  { label: "Line 1: ", value: "Your Name" },
  { label: "Line 2: ", value: "Purpose of contact" },
  { label: "Line 3: ", value: "Your Message" },
]

type HeaderTabsProps = {
  addTab: () => void; 
  setTabs: React.Dispatch<React.SetStateAction<Item[]>>; 
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>; 
  selectedTab: string | null; 
  tabs: Item[]; 
};

const HeaderTabs: React.FC<HeaderTabsProps> = ({ addTab, setTabs, setSelectedTab, selectedTab, tabs } ) => {

  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      const newTabs = [...tabs].filter((tab) => tab.id !== id)
      setTabs(newTabs)
    }
  }

  const handleEditorChange = (newValue: string) => {
    setFileContents((prev) => ({
      ...prev,
      [selectedTab!]: newValue,
    }));
  };

  return (
    <Tabs.Root value={selectedTab}
      onValueChange={(e) => setSelectedTab(e.value)}
      colorScheme="whiteAlpha"  overflowY={"auto"} maxHeight={"600px"}>
      <Tabs.List flex="1 1 auto" bg="var(--bg-sidemenu)" border={"none"}>
        {tabs.map((item) => {
          const IconComponent = iconMapping[item.icon];
          const isAbout = item.title === "About.txt";
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
              <IconComponent color={isAbout ? "var(--color-yellow)" : ""} />
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
          <Tabs.Content value={item.id} key={item.id} display={"flex"} justifyContent={"center"} p={16}>
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
              <Box pb={56}>
              <Heading size="7xl" position={"relative"} zIndex={2}>Aliasger Bohra 👋</Heading>
              <Heading size="2xl" display={"flex"} position={"relative"} zIndex={2} >Looking for work <Flex ml={2}>
        <Status size={"lg"} value="warning" me={2}  position={"relative"} zIndex={2} /> /
        <TypingEffect />
      </Flex></Heading>
      <Flex alignItems={"center"} position={"relative"} zIndex={2} >
      <Github />
      <Linkedin  />
      <Button onClick={addTab} ms={2} rounded={24} variant={"subtle"} size={"sm"} position={"relative"} zIndex={2} >Contact me -&gt;</Button>
      </Flex>
      </Box>
      <GlowingDivider />
      {/* About me */}
      <Flex alignItems={"center"} gap={3} justifyContent={"start"}><GlowingIcon /> <Text fontSize={24} ms={2}>About Me</Text></Flex>

      <Heading size={"4xl"} mt={8} maxWidth={"600px"}>I'm a software developer specialized on Web Applications</Heading>
            </Box>
            ) : (
              <Box
                textAlign={"start"}
                p={4}
              >
                <Heading size={"2xl"} textAlign={"center"}>Contact Me</Heading>
                <Heading
                  size={"lg"}
                  maxWidth={"700px"}
                  mt={2}
                  mb={8}
                  lineHeight={"1.5"}
                >
                  <Highlight
                    query={["Code editor", "feedback", "portfolio", "projects"]}
                    styles={{ px: "0.5", color: "var(--color-cyan)" }}
                  >
                    Reach out using the Code editor below for inquiries (type your message below),
                    or share your valuable feedback about my portfolio and projects.
                  </Highlight>
                </Heading>
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
              </Box>


            )}
          </Tabs.Content>
        ))}
      </Tabs.ContentGroup>
    </Tabs.Root>
  )
}

export default HeaderTabs
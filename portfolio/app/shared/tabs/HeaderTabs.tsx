import { Heading, Tabs, Link, Box, Highlight } from "@chakra-ui/react"
import { useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { CiText } from "react-icons/ci";
import { LuPlus } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { CloseButton } from "~/components/ui/close-button";
import { IconType } from "react-icons";
import EditorEmptyState from "../EditorEmptyState";
import { DataListItem, DataListRoot } from "~/components/ui/data-list"

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

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

const items: Item[] = [
  { id: "1", title: "Welcome", content: "For simpler version of portfolio visit:", icon: "GiPartyPopper" },
  { id: "2", title: "About", content: "Tab Content", icon: "FaStar" },
]


const stats = [
  { label: "Line 1: ", value: "Your Name" },
  { label: "Line 2: ", value: "Purpose of contact" },
  { label: "Line 3: ", value: "Your Message" },
]
const uuid = () => {
  return Math.random().toString(36).substring(2, 15)
}
const HeaderTabs = () => {
  const [tabs, setTabs] = useState<Item[]>(items)
  const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)

  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  const addTab = () => {
    const newTabs = [...tabs]

    const uid = uuid()

    newTabs.push({
      id: uid,
      title: `Contact`,
      content: `Contact Me`,
      icon: "FaPhoneAlt",
    })

    setTabs(newTabs)
    setSelectedTab(newTabs[newTabs.length - 1].id)
  }

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
      colorScheme="whiteAlpha" >
      <Tabs.List flex="1 1 auto" bg="var(--bg-sidemenu)" border={"none"}>
        {tabs.map((item) => {
          const IconComponent = iconMapping[item.icon];
          const isAbout = item.title === "About";
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
        {tabs.map((item) => (
          <Tabs.Content value={item.id} key={item.id} display={"flex"} justifyContent={"center"} pt={16}>
            {item.title === "Welcome" ? (
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
            ) : item.title === "About" ? (
              <Heading>About page</Heading>
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
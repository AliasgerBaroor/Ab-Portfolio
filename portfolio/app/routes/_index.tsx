import { Flex, Box, Icon, Text,  } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import HeaderTabs from "~/shared/tabs/HeaderTabs";
import { VscVscode } from "react-icons/vsc";
import { Button } from "~/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { Copy } from "lucide-react";
import { FaMinus } from "react-icons/fa";
import { BsLayoutSidebarInset, BsReverseLayoutSidebarReverse  } from "react-icons/bs";
import { TbLayoutBottombar } from "react-icons/tb";
import { LuLayoutPanelLeft } from "react-icons/lu";
import FolderTree from "~/shared/FolderTree";
import IconTab from "~/shared/tabs/IconTab";


import { CiText } from "react-icons/ci";
import { GiPartyPopper } from "react-icons/gi";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { useState } from "react";
export const meta: MetaFunction = () => {
  return [
    { title: "SB Creations" },
    { name: "description", content: "SB Creations App!" },
  ];
};

const topHeader = [
  { id : "1", title: "File" },
  { id : "2", title: "Edit" },
  { id : "3", title: "Selection" },
  { id : "4", title: "View" },
  { id : "5", title: "Go" },
  { id : "6", title: "Run" },
  { id : "7", title: "Terminal" },
  { id : "8", title: "Help" },
]
const uuid = () => {
  return Math.random().toString(36).substring(2, 15)
}

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
  { id: "eqci6nuohtu", title: "About.txt", content: "Tab Content", icon: "FaStar" },
  { id: "bu9icnuqhtl", title: "Welcome.txt", content: "For simpler version of portfolio visit:", icon: "GiPartyPopper" },
]

export default function Index() {
    const [tabs, setTabs] = useState<Item[]>(items)
    const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)


const addTab = () => {
  const newTabs = [...tabs]

  const uid = uuid()

  newTabs.push({
    id: uid,
    title: `Contact.txt`,
    content: `Contact Me`,
    icon: "FaPhoneAlt",
  })

  setTabs(newTabs)
  setSelectedTab(newTabs[newTabs.length - 1].id)
}

  return (
    <Box py={4} pr={4} h={"94%"}>
      <Flex alignItems={"center"} pb={4} pl={4} justifyContent={"space-between"}>
      <Flex alignItems={"center"}>
        <Icon size={"xl"} me={2}>
      <VscVscode color="#29b6f6"  />
        </Icon>
        { topHeader.map(tHead => (
          <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
            {
              bg: "var(--bg-lightblack)",
            }
          }>{ tHead.title }</Button>
        )) }
        </Flex>
        <Text>Aliasger Bohra - Portfolio</Text>
        <Flex alignItems={"center"}>
          <Icon me={2}>
        <LuLayoutPanelLeft />
          </Icon>
          <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }><BsLayoutSidebarInset /></Button>
        <Button variant="ghost" color={"var(--color-white)"} size={"md"} _hover={
            {
              bg: "var(--bg-lightblack)",
            }
          }><TbLayoutBottombar /></Button>
        <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
            {
              bg: "var(--bg-lightblack)",
            }
          }><BsReverseLayoutSidebarReverse /></Button>
        <Button variant="ghost" me={2} color="gray.400" _hover={
  {
    bg: "var(--bg-lightblack)",
    color: "#fff",
  }
}>
<Icon size={"xs"} _hover={
  {
    color: "#fff",
  }
}>
<FaMinus />
        </Icon>
        </Button>
        <Button variant="ghost" me={2} color="gray.400" _hover={
  {
    bg: "var(--bg-lightblack)",
    color: "#fff",
  }
}>
<Icon size={"sm"}  _hover={
  {
    color: "#fff",
  }
}>
<Copy />
        </Icon>
        </Button>
        <Button variant="ghost" me={2} color="gray.400" _hover={
  {
    bg: "var(--color-red)",
    color: "#fff",
  }
}>
<Icon size={"md"} _hover={
  {
    color: "#fff",
  }
}>
<RxCross2 />
        </Icon>
        </Button>
        </Flex>
      </Flex>
    <Flex height="100%">
      <Box flexBasis="5%" bg="var(--bg-sidemenu)" h={"100%"}>
        <IconTab />
      </Box>
      <Box flexBasis="25%" bg="var(--bg-filetree)" h={"100%"}>
        <FolderTree tabs={tabs} setSelectedTab={setSelectedTab} uuid={uuid} setTabs={setTabs} />
      </Box>
      <Box flexBasis="70%" bg="var(--bg-editor)" h={"100%"}>
        <HeaderTabs addTab={addTab} setTabs={setTabs} setSelectedTab={setSelectedTab} selectedTab={selectedTab} tabs={tabs} />
      </Box>
    </Flex>
    </Box>
  );
}

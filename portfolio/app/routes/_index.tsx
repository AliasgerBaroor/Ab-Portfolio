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

export default function Index() {
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
        <Button variant="ghost" me={2} _hover={
  {
    bg: "var(--bg-lightblack)",
    color: "#fff",
  }
}>
<Icon size={"sm"} color="gray.400" _hover={
  {
    color: "#fff",
  }
}>
<FaMinus />
        </Icon>
        </Button>
        <Button variant="ghost" me={2} _hover={
  {
    bg: "var(--bg-lightblack)",
    color: "#fff",
  }
}>
<Icon size={"sm"} color="gray.400" _hover={
  {
    color: "#fff",
  }
}>
<Copy />
        </Icon>
        </Button>
        <Button variant="ghost" me={2} _hover={
  {
    bg: "var(--color-red)",
    color: "#fff",
  }
}>
<Icon size={"md"} color="gray.400" _hover={
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
        <FolderTree />
      </Box>
      <Box flexBasis="70%" bg="var(--bg-editor)" h={"100%"}>
        <HeaderTabs />
      </Box>
    </Flex>
    </Box>
  );
}

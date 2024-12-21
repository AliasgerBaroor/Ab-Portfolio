import { Flex, Box, Icon, Text, } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import randomString from "random-string"
import HeaderTabs from "~/shared/tabs/HeaderTabs";
import { VscVscode } from "react-icons/vsc";
import { Button } from "~/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import { Copy } from "lucide-react";
import { FaMinus, FaDatabase } from "react-icons/fa";
import { BsLayoutSidebarInset, BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { TbLayoutBottombar } from "react-icons/tb";
import { LuLayoutPanelLeft } from "react-icons/lu";
import FolderTree from "~/shared/FolderTree";
import IconTab from "~/shared/tabs/IconTab";


import { CiText } from "react-icons/ci";
import { GiPartyPopper } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
import { RiContactsBook3Line } from "react-icons/ri";
export const meta: MetaFunction = () => {
  return [
    { title: "SB Creations" },
    { name: "description", content: "SB Creations App!" },
  ];
};

const topHeader = [
  { id: "1", title: "File" },
  { id: "2", title: "Edit" },
  { id: "3", title: "Selection" },
  { id: "4", title: "View" },
  { id: "5", title: "Go" },
  { id: "6", title: "Run" },
  { id: "7", title: "Terminal" },
  { id: "8", title: "Help" },
]
const uuid = () => {
  return randomString({ length: 50 })
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
  RiContactsBook3Line: RiContactsBook3Line,
  FaDatabase: FaDatabase,
};

const items: Item[] = [
  { id: "ao5lWpogZlcdFZyfM6tyXa721mexbJVV72EF0sC7dmA5rsSR2f", title: "Welcome.txt", content: "For simpler version of portfolio visit:", icon: "GiPartyPopper" },
  { id: "3rYhANgp84gLGaXdgVEsTw6sBpWOkixQgB6Tc0t0ijGOsC4Ykk", title: "About.txt", content: "Tab Content", icon: "FaStar" },
]

export default function Index() {
  const [tabs, setTabs] = useState<Item[]>(items)
  const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)


    const addOrSelectTab = (itemName: string, icon: keyof typeof iconMapping, color: string) => {
      const existingTab = tabs.find((tab) => tab.title === itemName);
      if (existingTab) {
        setSelectedTab(existingTab.id);
      } else {
        const uid = uuid();
    
        const newTab = {
          id: uid,
          title: itemName,
          color: color,
          content: `Content of ${itemName}`,
          icon: icon, 
        };
    
        const newTabs = [...tabs, newTab];
        setTabs(newTabs);
        setSelectedTab(uid);
      }
    };
  
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "g") {
          event.preventDefault();
          addOrSelectTab("Welcome.txt", "GiPartyPopper" ,"var(--color-gray)")
        }
        else if (event.ctrlKey && event.key === "a") {
          event.preventDefault();
          addOrSelectTab("About.txt", "FaStar" ,"var(--color-yellow)")
        }
        else if (event.ctrlKey && event.key === "l") {
          event.preventDefault();
          addOrSelectTab("About.txt", "FaStar" ,"var(--color-purple)")
        }
        else if (event.ctrlKey && event.key === "q") {
          event.preventDefault();
          addOrSelectTab("Welcome.txt", "FaDatabase" ,"var(--color-orange)")
        }
        else if (event.ctrlKey && event.key === "u") {
          event.preventDefault();
          addOrSelectTab("Contact.txt", "RiContactsBook3Line" ,"var(--color-blue)")
        }
      };
  
      window.addEventListener("keydown", handleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
  


  const addTab = () => {
    const addTabList = [
      {
        id: uuid(),
        title: `Contact.txt`,
        content: `Contact Me`,
        icon: "RiContactsBook3Line",
      },
      {
        id: uuid(),
        title: `Skillset.txt`,
        content: `Skillset`,
        icon: "BsBook",
      },
      {
        id: uuid(),
        title: `About.txt`,
        content: `About`,
        icon: "FaStar",
      },
      {
        id: uuid(),
        title: `Welcome.txt`,
        content: "For simpler version of portfolio visit:",
        icon: "GiPartyPopper",
      },
    ];

    const nextTabToAdd = addTabList.find(
      (tab) => !tabs.some((existingTab) => existingTab.title === tab.title)
    );

    if (nextTabToAdd) {
      setTabs([...tabs, nextTabToAdd]);
      setSelectedTab(nextTabToAdd.id);
    } else {
      console.log("All tabs are already added!");
    }
  };


  return (
    <Box py={4} pr={4} h={"94%"}>
      <Flex alignItems={"center"} pb={4} pl={4} justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Icon size={"xl"} me={2}>
            <VscVscode color="#29b6f6" />
          </Icon>
          {topHeader.map(tHead => (
            <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>{tHead.title}</Button>
          ))}
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
            <Icon size={"sm"} _hover={
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

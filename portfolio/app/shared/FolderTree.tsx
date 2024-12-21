import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaFolderOpen, FaGitAlt, FaNpm, FaMarkdown, FaStar } from "react-icons/fa";
import { TbChevronRight, TbChevronDown } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { RiFolderKeyholeFill, RiFolderHistoryFill, RiFolderUserFill,RiFolderChart2Fill, RiFolderAddFill, RiContactsBook3Line } from "react-icons/ri";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { IoMdImage } from "react-icons/io";
import { SiEslint,SiVite } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { DiJavascript1 } from "react-icons/di";

import { IconType } from "react-icons";
import { BsBook } from "react-icons/bs";

const iconMapping: { [key: string]: IconType } = {
  "RiFolderKeyholeFill": RiFolderKeyholeFill,
  "GrReactjs": GrReactjs,
  "RiFolderUserFill": RiFolderUserFill,
  "RiFolderHistoryFill": RiFolderHistoryFill,
  "RiFolderChart2Fill": RiFolderChart2Fill,
  "RiFolderAddFill": RiFolderAddFill,
  "LiaStarHalfAltSolid": LiaStarHalfAltSolid,
  "IoMdImage": IoMdImage,
  "SiEslint": SiEslint,
  "FaGitAlt": FaGitAlt,
  "VscJson": VscJson,
  "FaNpm": FaNpm,
  "FaStar": FaStar,
  "FaMarkdown": FaMarkdown,
  "DiJavascript1": DiJavascript1,
  "SiVite": SiVite,
  "BsBook": BsBook,
  "RiContactsBook3Line": RiContactsBook3Line,
}

type FileItem = {
  name: string;
  icon: keyof typeof iconMapping;
  color: string;
  type: "file";
};

type FolderItem = {
  name: string;
  icon: keyof typeof iconMapping;
  color: string;
  type: "folder";
  isOpen: boolean;
  children?: TreeItem[]; 
};

type TreeItem = FileItem | FolderItem;

const data: TreeItem[] = [
  {
    name: "app",
    type: "folder",
    icon: "RiFolderKeyholeFill",
    color: "var(--color-green)",
    isOpen: true,
    children: [
      {
        name: "components",
        type: "folder",
        icon: "RiFolderChart2Fill",
        color: "var(--color-yellow)",
        isOpen: true,
        children: [
          { name: "About.txt", type: "file", icon: "FaStar", color: "var(--color-yellow)" },
          { name: "Skillset.txt", type: "file", icon: "BsBook", color: "var(--color-purple)" },
          { name: "Contact.txt", type: "file", icon: "RiContactsBook3Line", color: "var(--color-blue)" },
        ],
      },
      {
        name: "routes",
        type: "folder",
        icon: "RiFolderAddFill",
        color: "var(--color-red)",
        isOpen: false,
        children: [
          { name: "route1.txt", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "route2.txt", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "route3.txt", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "route4.txt", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "route5.txt", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
        ],
      },
      { name: "entry.client.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
      { name: "entry.server.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
      { name: "root.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
      {
        name: "work",
        type: "folder",
        icon: "RiFolderHistoryFill",
        color: "var(--color-purple)",
        isOpen: true,
        children: [
          { name: "VsCodePortfolio.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "CMS.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
          { name: "ReverseProxy.tsx", type: "file", icon: "GrReactjs", color: "var(--color-blue)" },
        ],
      },
    ],
  },
  {
    name: "public",
    type: "folder",
    icon: "RiFolderUserFill",
    color: "var(--color-green)",
    isOpen: false,
    children: [
      { name: "favicon.ico", type: "file", icon: "LiaStarHalfAltSolid", color: "var(--color-orange)" },
      { name: "logo-dark.png", type: "file", icon: "IoMdImage", color: "var(--color-pink)" },
      { name: "logo-light.png", type: "file", icon: "IoMdImage", color: "var(--color-pink)" },
    ],
  },
  { name: ".eslintrc.cjs", type: "file", icon: "SiEslint", color: "var(--color-blue)" },
  { name: ".gitignore", type: "file", icon: "FaGitAlt", color: "var(--color-orange)" },
  { name: "components.json", type: "file", icon: "VscJson", color: "var(--color-yellow)" },
  { name: "package-lock.json", type: "file", icon: "FaNpm", color: "var(--color-red)" },
  { name: "package.json", type: "file", icon: "FaNpm", color: "var(--color-red)" },
  { name: "README.md", type: "file", icon: "FaMarkdown", color: "var(--color-brown)" },
  { name: "tsconfig.json", type: "file", icon: "DiJavascript1", color: "var(--color-blue)" },
  { name: "vite.config.ts", type: "file", icon: "SiVite", color: "var(--color-purple)" },
];

type Item = {
  id: string;
  title: string;
  icon: keyof typeof iconMapping;
  content: React.ReactNode;
}

type FolderTreeProps = {
  tabs: Item[]; 
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>; 
  uuid: () => string; 
  setTabs: React.Dispatch<React.SetStateAction<Item[]>>;
};


const FolderTree: React.FC<FolderTreeProps> = ({ tabs, setSelectedTab, uuid, setTabs }) => {
  const [FData, setFData] = useState<TreeItem[]>(data);

  const toggleFolder = (path: number[]) => {
    const updatedData = [...FData];

    const updateState = (items: TreeItem[], path: number[]) => {
      items.forEach((item, index) => {
        if (path[0] === index) {
          if (path.length === 1 && item.type === "folder") {
            item.isOpen = !item.isOpen;
          } else if (item.type === "folder" && item.children) {
            updateState(item.children, path.slice(1));
          }
        }
      });
    };

    updateState(updatedData, path);
    setFData(updatedData);
  };
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
  const renderTree = (items: TreeItem[], path: number[] = []): JSX.Element[] => {
    return items.map((item, index) => {
      const currentPath = [...path, index];
      const IconComponent = iconMapping[item.icon];

      if (item.type === "folder") {
        return (
          <Box key={item.name + index} pl={path.length * 4}>
            <Flex alignItems="center" gap={2} onClick={() => toggleFolder(currentPath)} cursor="pointer">
              <Icon>{item.isOpen ? <TbChevronDown /> : <TbChevronRight />}</Icon>
              <Icon>{item.isOpen ? <FaFolderOpen color={item.color} /> : <IconComponent color={item.color} />
            }</Icon>
              <Text>{item.name}</Text>
            </Flex>
            {item.isOpen && item.children && (
              <Box pl={4}>{renderTree(item.children, currentPath)}</Box>
            )}
          </Box>
        );
      }
      return (
        <Box key={item.name} pl={(path.length + 1) * 4} onClick={() => item.name === "About.txt" ? addOrSelectTab("About.txt", item.icon, item.color) : item.name === "Skillset.txt" ? addOrSelectTab("Skillset.txt", item.icon, item.color) : item.name === "Contact.txt" ? addOrSelectTab("Contact.txt", item.icon, item.color) : "" }>
          <Flex alignItems="center" gap={2}  cursor="pointer">
            <Icon ms={2}>
            <IconComponent color={item.color} />
            </Icon>
            <Text>{item.name}</Text>
          </Flex>
        </Box>
      );
    });
  };

  return <Box>{renderTree(FData)}</Box>;
};

export default FolderTree;

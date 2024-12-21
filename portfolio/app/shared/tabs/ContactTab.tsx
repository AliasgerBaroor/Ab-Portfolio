import { Heading, Box } from "@chakra-ui/react"
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-monokai";
// import "ace-builds/src-noconflict/ace";

import GlowingDivider from "../animation/glow/Devider";
import TopicHeader from "../headers/TopicHeader";
import TopicMainHeading from "../headers/TopicMainHeading";
import { DataListItem, DataListRoot } from "~/components/ui/data-list";
import { useState } from "react";
const ContactTab = ({ selectedTab }: { selectedTab: string | null }) => {
      const [fileContents, setFileContents] = useState<Record<string, string>>({});
    
      const handleEditorChange = (newValue: string) => {
        setFileContents((prev) => ({
          ...prev,
          [selectedTab!]: newValue,
        }));
      };
    
      const stats = [
        { label: "Line 1: ", value: "Your Name" },
        { label: "Line 2: ", value: "Purpose of contact" },
        { label: "Line 3: ", value: "Your Message" },
      ]
      
  return (
    <Box
    textAlign={"start"}
    width={"100%"}
    p={4}
  >
    <TopicHeader Color="blue" Icon={"RiContactsBook3Line"} HText={"Contact Me"} />

    <TopicMainHeading TopicText={"Use the code editor below to ask questions or share feedback about my portfolio"} TopicHighlight={["code editor", "questions", "feedback", "portfolio", "projects"]} color={"var(--color-blue)"} />

    <Box my={8}></Box>

    {/* <AceEditor
      value={fileContents[selectedTab!] || ""}
      mode="javascript"
      theme="monokai"
      width="100%"
      height="200px"
      onChange={handleEditorChange}
      name="CodeEditor"
    />
     */}
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
  )
}

export default ContactTab
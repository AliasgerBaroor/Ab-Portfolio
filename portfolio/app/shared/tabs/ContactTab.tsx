import { Heading, Box, HStack, Icon } from "@chakra-ui/react"
import Editor from '@monaco-editor/react';

import { addMessage } from "~/service/addMessage"
import TopicHeader from "../headers/TopicHeader";
import TopicMainHeading from "../headers/TopicMainHeading";
import { DataListItem, DataListRoot } from "~/components/ui/data-list";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { LuInfo } from "react-icons/lu"
import ImagePreviewModal from "../modal/imagePreviewModal";

const ContactTab = () => {
  const [code, setCode] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (code.length === 4) {
      try {

        setLoading(true);
        const [name, subject, contact, message] = code;
      const response_add_message = await addMessage({ name, subject, contact, message });
      if(response_add_message.status === 201) {
        setLoading(false);
        console.log(response_add_message.data.data)
        setCode([])
      }
    } catch (error) {
      setLoading(false);
    }
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    const newValue = value?.split("\r\n").filter((line) => line.trim() !== "");
    const codeValue = newValue?.slice(0, 4) || [];
    setCode(codeValue); 
  };

      const stats = [
        { label: "Line 1: ", value: "Your Name" },
        { label: "Line 2: ", value: "Purpose of contact" },
        { label: "Line 3: ", value: "Your Contact" },
        { label: "Line 4: ", value: "Your Message" },
      ]
      
  return (
    <Box
    textAlign={"start"}
    width={"100%"}
    p={4}
    px={16}
  >
    <TopicHeader Color="blue" Icon={"RiContactsBook3Line"} HText={"Contact Me"} />

    <TopicMainHeading TopicText={"Use the code editor below to ask questions or share feedback about my portfolio"} TopicHighlight={["code editor", "questions", "feedback", "portfolio", "projects"]} color={"var(--color-blue)"} />

    <Box my={8}></Box>     
 {/* <Editor value={code.join("\r\n")} height="40vh" defaultLanguage="text" defaultValue="" onChange={(value) => handleEditorChange(value)} /> */}

 <Button
        onClick={handleSubmit}
        variant={"solid"}
        colorPalette="blue"
        mt={4}
        disabled={code.length !== 4} 
        loading={loading}
        loadingText="Adding..."
      >
        Submit
      </Button>

      <HStack alignItems={"center"}>
        <Heading size={"xl"} my={4}>Guide</Heading>
        <ImagePreviewModal>
          <Icon cursor={"pointer"} size={"sm"}>
              <LuInfo />
          </Icon>
        </ImagePreviewModal>
      </HStack>
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
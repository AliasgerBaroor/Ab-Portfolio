import { Badge, Box, Flex, Heading, HStack, Icon } from "@chakra-ui/react"
import TopicHeader from "../headers/TopicHeader"
import TopicMainHeading from "../headers/TopicMainHeading"
import { RiJavascriptFill, RiNodejsFill } from "react-icons/ri"
import { GrReactjs } from "react-icons/gr";
import { IconType } from "react-icons"
import { SiDjango, SiMongodb, SiPython } from "react-icons/si"

const programming_languages = [
    { name: "{ lang.JavaScript }", icon: "RiJavascriptFill", color: "var(--color-yellow)" },
    { name: "{ framework.Node.js }", icon: "RiNodejsFill", color: "var(--color-green)" },
    { name: "{ lib.React }", icon: "GrReactjs", color: "var(--color-blue)" },
    { name: "{ DB.MongoDB }", icon: "SiMongodb", color: "var(--color-green)" },
    { name: "{ lang.TypeScript }", icon: "RiJavascriptFill", color: "var(--color-cyan)" },
    { name: "{ framework.React native }", icon: "GrReactjs", color: "var(--color-blue)"  },
    { name: "{ lang.Python }", icon: "SiPython", color: "var(--color-yellow)"  },
    { name: "{ framework.Django }", icon: "SiDjango", color: "var(--color-gray)"  },
    // { name: "Express.js", icon: "RiJavascriptFill" },
    // { name: "MySQL", icon: "RiJavascriptFill" },
    // { name: "PostgreSQL", icon: "RiJavascriptFill" },
    // { name: "GraphQL", icon: "RiJavascriptFill" },
    // { name: "Flask", icon: "RiJavascriptFill" },
    // { name: "C++", icon: "RiJavascriptFill" },
    // { name: "Rust", icon: "RiJavascriptFill" },
]

const iconMapping: { [key: string]: IconType } = {
    "RiJavascriptFill": RiJavascriptFill,
    "GrReactjs": GrReactjs,
    "RiNodejsFill": RiNodejsFill,
    "SiMongodb": SiMongodb,
    "SiPython": SiPython,
    "SiDjango": SiDjango,
};


const SkillsTab = () => {

    return (
        <Box width={"100%"}>
            <TopicHeader Color="yellow" Icon={"BsBook"} HText={"My Skillset"} />
            <TopicMainHeading TopicText={"Full Stack software developer with experience in Front-End and Back-End technologies"} TopicHighlight={["Full Stack", "Front-End", "Back-End"]} color={"var(--color-yellow)"} />
            <HStack justifyContent={"space-between"} mt={8}>
                <Box>Services name</Box>
                <Box>
                    <Heading size={"2xl"}>Languages & Framework</Heading>
                    <HStack gap={4} overflowX={"auto"} maxWidth={"630px"}>
                        {programming_languages.map((pl) => {
                            const IconComponent = iconMapping[pl.icon]
                            return (
                                <Box textAlign="center" mt={4}>
                                <Box>
                                  <Icon color={pl.color} fontSize={80}>
                                    <IconComponent  />
                                  </Icon>
                                </Box>
                                <Badge variant="subtle" colorPalette="red" mt={2}>
                                { pl.name }
                                </Badge>
                              </Box>
                            )
                        })}
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default SkillsTab
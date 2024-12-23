import { Box, HStack, Text } from '@chakra-ui/react'

import { HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, NodeIcon, ExpressIcon, MongoDBIcon } from "~/assets/icons/TechIcons"
const tech_stack = [
    {
        name: "HTML5",
        icon: HtmlIcon,
    },
    {
        name: "CSS3",
        icon: CssIcon,
    },
    {
        name: "Javascript",
        icon: JavascriptIcon,
    },
    {
        name: "ReactJS",
        icon: ReactIcon,
    },
    {
        name: "NodeJS",
        icon: NodeIcon,
    },
    {
        name: "ExpressJS",
        icon: ExpressIcon,
    },
    {
        name: "MongoDB",
        icon: MongoDBIcon,
    },
]

const TechnologiesSection = () => {
    return (
        <HStack alignItems={"center"} gap={8} mt={4}>
            { tech_stack.map((techItem) => {
                const IconComponent = techItem.icon
                return (
                    <Box textAlign={"center"}>
                    <IconComponent />
                    <Text color={"var(--color-white)"} fontSize={"2xl"} pt={1}>{ techItem.name }</Text>
                </Box>
    )
            } ) }
        </HStack>
    )
}

export default TechnologiesSection
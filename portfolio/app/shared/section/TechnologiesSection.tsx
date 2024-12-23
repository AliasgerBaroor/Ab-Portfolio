import { Box, HStack, Text } from '@chakra-ui/react'

import { HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, NodeIcon, ExpressIcon, MongoDBIcon, DockerIcon, RemixIcon, KindeIcon, GitIcon, GitHubIcon } from "~/assets/icons/TechIcons"
import useChunks from '~/hooks/use-chunk';

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
        name: "Github",
        icon: GitHubIcon,
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
    {
        name: "Docker",
        icon: DockerIcon,
    },
    {
        name: "Remix",
        icon: RemixIcon,
    },
    {
        name: "Git",
        icon: GitIcon,
    },
    {
        name: "Kinde",
        icon: KindeIcon,
    },
    {
        name: "ReactJS",
        icon: ReactIcon,
    },
]

const TechnologiesSection = () => {
    const techChunks = useChunks(tech_stack, 8);

    return (
        <Box>
            {techChunks.map((chunk, chunkIndex) => (
                <HStack key={chunkIndex} alignItems="center" gap={8} mt={4}>
                    {chunk.map((techItem, index) => {
                        const IconComponent = techItem.icon;
                        return (
                            <Box key={index} textAlign="center">
                                <IconComponent />
                                <Text color="var(--color-white)" fontSize="2xl" pt={1}>
                                    {techItem.name}
                                </Text>
                            </Box>
                        );
                    })}
                </HStack>
            ))}
        </Box>
    )
}

export default TechnologiesSection
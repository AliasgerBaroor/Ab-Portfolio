import { Box, HStack, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons';

import { HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, NodeIcon, ExpressIcon, MongoDBIcon, DockerIcon, RemixIcon, KindeIcon, GitIcon, GitHubIcon, TailwindIcon, ChakraUiIcon } from "~/assets/icons/TechIcons"
import useChunks from '~/hooks/use-chunk';

const techIconMapping: { [key: string]: IconType } = {
    "HtmlIcon": HtmlIcon,
    "CssIcon": CssIcon,
    "JavascriptIcon": JavascriptIcon,
    "ReactIcon": ReactIcon,
    "NodeIcon": NodeIcon,
    "ExpressIcon": ExpressIcon,
    "MongoDBIcon": MongoDBIcon,
    "DockerIcon": DockerIcon,
    "RemixIcon": RemixIcon,
    "KindeIcon": KindeIcon,
    "GitIcon": GitIcon,
    "GitHubIcon": GitHubIcon,
    "TailwindIcon": TailwindIcon,
    "ChakraUiIcon": ChakraUiIcon,
}


type StackItemProps = {
    name: string;
    icon: string;
  };
  
type TechnologiesSectionProps = {
    tech_stack: StackItemProps[];
  };

const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({ tech_stack }) => {
    const techChunks = useChunks(tech_stack, 8);

    return (
        <Box>
            {techChunks.map((chunk, chunkIndex) => (
                <HStack key={chunkIndex} alignItems="center" gap={8} mt={4}>
                    {chunk.map((techItem, index) => {
                        const IconComponent = techIconMapping[techItem.icon];
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
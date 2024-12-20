import { Heading, Highlight } from "@chakra-ui/react"

const TopicMainHeading = ({ TopicText, TopicHighlight } : { TopicText: string, TopicHighlight: string[] }) => {
    return (
        <Heading size={"4xl"} mt={8} maxWidth={"600px"}> <Highlight
            query={TopicHighlight}
            styles={{ px: "0.5", color: "var(--color-cyan)" }}
        >{TopicText}</Highlight></Heading>
    )
}

export default TopicMainHeading
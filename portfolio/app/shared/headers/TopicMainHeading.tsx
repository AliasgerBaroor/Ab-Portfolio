import { Heading, Highlight } from "@chakra-ui/react"

const TopicMainHeading = ({ TopicText, TopicHighlight, color } : { TopicText: string, TopicHighlight: string[], color: string }) => {
    return (
        <Heading size={"4xl"} mt={8} maxWidth={"600px"}> <Highlight
            query={TopicHighlight}
            styles={{ px: "0.5", color: color }}
        >{TopicText}</Highlight></Heading>
    )
}

export default TopicMainHeading
import { Box, Heading, Link } from "@chakra-ui/react"
import EditorEmptyState from "../EditorEmptyState"

const WelcomeTab = ({ content, setSimpleFolio }: { content: React.ReactNode, setSimpleFolio: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <Box textAlign={"center"}>
                  <Heading size="lg" letterSpacing="tight" color={"var(--color-cyan)"}>Welcome Friend!</Heading>
                  <Heading size="2xl" letterSpacing="tight">
                    {content}
                    <Link
                      variant="underline"
                      style={{ color: 'var(--color-blue)' }}
                      ms={4}
                      onClick={() => setSimpleFolio(true)}
                    >
                      Basic Version
                    </Link>
                  </Heading>
                  <Heading size={"md"} color={"var(--color-gray)"} maxWidth={"600px"} mt={2}>I highly recommend you check everything thoroughly, as many features are working and can be explored. Thank you!</Heading>
                  <EditorEmptyState />
                </Box>
  )
}

export default WelcomeTab
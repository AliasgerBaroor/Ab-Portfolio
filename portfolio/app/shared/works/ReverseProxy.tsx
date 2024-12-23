import { Box, Center, Heading, Highlight, HStack, Image, List  } from "@chakra-ui/react"
import WorkFullImg from "~/assets/images/work-full-2.png"
import GlowingDivider from "../animation/glow/Devider"
import TopicMainHeading from "../headers/TopicMainHeading"
import reverseProxySystemDesignImg from "~/assets/images/work-full-2-in1.png"
import TechnologiesSection from "../section/TechnologiesSection"
const ReverseProxy = () => {
  return (
    <Box pt={16} width="100%">
      <Center width="100%">
        <Box textAlign={"center"} maxWidth={"800px"}>
          <Heading size={"lg"} color={"var(--color-cyan)"}>Prototype</Heading>
          <Heading size={"5xl"} mb={2}>Reverse Proxy</Heading>
          <Heading size={"md"} color={"var(--color-gray)"}>An app to create custom reverse proxies with named configurations, Docker image selection, and automatic domain generation like http://reverse.proxy/usergivenname.localhost.</Heading>
        </Box>
      </Center>

      <HStack width="100%" gap={0} align="stretch" borderTop="1px solid var(--color-gray)" mt={8}>
        <Box
          flex="1"
          p={8}
          borderRight="1px solid var(--color-gray)"
        >
          <Heading size="sm" color="var(--color-cyan)" mb={2}>
          Goal
          </Heading>
          <Heading size="sm" color="var(--color-gray)">
            Security & Isolation
          </Heading>
        </Box>
        <Box
          flex="1"
          p={8}
          borderRight="1px solid var(--color-gray)"
        >
          <Heading size="sm" color="var(--color-cyan)" mb={2}>
          Tech Stack
          </Heading>
          <Heading size="sm" color="var(--color-gray)">
          Remix, Kinde, Node.js, MongoDB
          </Heading>
        </Box>
        <Box
          flex="1"
          p={8}
        >
          <Heading size="sm" color="var(--color-cyan)" mb={2}>
            Service
          </Heading>
          <Heading size="sm" color="var(--color-gray)">
            SaaS Application
          </Heading>
        </Box>
      </HStack>

      <Image rounded="md" src={WorkFullImg} alt="Reverse Proxy" />
<Box px={16}>

<GlowingDivider />
<TopicMainHeading TopicText={"Technologies"} TopicHighlight={[]} color="var(--color-gray)"  />

<TechnologiesSection />

      <GlowingDivider />
      <TopicMainHeading TopicText={"Challenge"} TopicHighlight={[]} color="var(--color-gray)"  />
      <Heading size={"lg"} color={"var(--color-gray)"} mt={4}>Design & Develop a platform that desploys Docker containers with a pre-build images. This application needs to have multiple services coupled together:</Heading>

      <List.Root mt={4} color={"var(--color-gray)"}>
      
    <List.Root as="ol" mb={4}>
      <List.Item>
        Dedicated mongodb database from MongoDB Web.
      </List.Item>
      <List.Item>
      Dedicated application hosting for a Remix app in AWS Platform.
      </List.Item>
      <List.Item>
      Dedicated Container management service from AWS Platform.
      </List.Item>
    </List.Root>

    <List.Item>
    User should be able to assign a custom domain for the application.
    </List.Item>
  </List.Root>

  <GlowingDivider />
      <TopicMainHeading TopicText={"Solution"} TopicHighlight={[]} color="var(--color-gray)"  />

        <Box>
        <Heading size={"2xl"} my={4}>SB Reverse Proxy: Revolutionizing Deployment and Domain Mapping</Heading>
        <Heading size={"lg"} my={4} color={"var(--color-gray)"}>SB Reverse Proxy is an innovative prototype designed to simplify and streamline the process of deploying applications and managing domain mappings. With its user-friendly interface and robust backend architecture, this application empowers users to create and manage reverse proxies effortlessly, offering a glimpse into a scalable solution for deployment automation.</Heading>

      <Image rounded="md" src={reverseProxySystemDesignImg} alt={"reverse proxy system design"} />

      <Heading size={"2xl"} my={4}>Seamless User Registration and Login</Heading>
      <Heading size={"lg"} my={4} color={"var(--color-gray)"}>The journey begins with a secure and intuitive user authentication system. Upon accessing SB Reverse Proxy, users are prompted to register or log in. This step ensures a personalized experience, enabling users to track and manage their proxies efficiently. The login process serves as the gateway to the app's core functionality, providing users with exclusive access to create and monitor their proxies.</Heading>

      <Heading size={"2xl"} my={4}>Effortless Proxy Creation</Heading>
      <Heading size={"lg"} my={4} color={"var(--color-gray)"}>Once authenticated, users are directed to the "Create Proxy" page—a simple yet powerful interface where users can configure their proxies. The system prompts users to provide a proxy name and select an image to base their proxy on. SB Reverse Proxy offers a curated selection of pre-built Docker images, ensuring compatibility and ease of use. After inputting these details, users receive a prompt confirming their choices and are guided seamlessly to the "View Proxy" page.</Heading>

      <Heading size={"2xl"} my={4}>Real-Time Proxy Monitoring</Heading>
      <Heading size={"lg"} my={4} color={"var(--color-gray)"}>On the "View Proxy" page, users gain a comprehensive overview of their created proxies. Each entry displays essential details, including:</Heading>

      <List.Root mt={4} color={"var(--color-gray)"} gap={2}>
      <List.Item>
        <Highlight query="Proxy Name:"  styles={{ px: "0.5", color: "var(--color-cyan)" }}>Proxy Name: The user-defined identifier for the proxy.</Highlight>
      </List.Item>
      <List.Item>
        <Highlight query="Proxy URL:"  styles={{ px: "0.5", color: "var(--color-cyan)" }}>Proxy URL: The unique address where the proxy can be accessed.</Highlight>
      </List.Item>
      <List.Item>
        <Highlight query="Proxy Status:"  styles={{ px: "0.5", color: "var(--color-cyan)" }}>Proxy Status: A real-time indicator showing whether the proxy is running or inactive.</Highlight>
      </List.Item>
    </List.Root>

    <Heading size={"2xl"} my={4}>Automated Docker Integration</Heading>
    <Heading size={"lg"} my={4} color={"var(--color-gray)"}>Behind the scenes, SB Reverse Proxy integrates seamlessly with Docker to automate proxy creation. When a user submits their proxy configuration, the application dynamically spins up a Docker container using the selected image and user-defined name. This automation not only simplifies the deployment process but also ensures scalability and efficiency, reducing manual effort and potential errors.</Heading>

    <Heading size={"2xl"} my={4}>Future Expansion: File and Code Management</Heading>
    <Heading size={"lg"} my={4} color={"var(--color-gray)"}>As SB Reverse Proxy evolves, it will introduce powerful new features, including the ability for users to upload and manage their own code and files. These additions will allow users to develop, save, and deploy custom projects directly within the application. The reverse proxy mechanism will ensure secure and reliable access to these projects, with all network traffic routed seamlessly through predefined ports (external port 8080 and internal port 80).</Heading>

    <Heading size={"2xl"} my={4}>A Vision for Simplified Deployment</Heading>
    <Heading size={"lg"} my={4} color={"var(--color-gray)"}>SB Reverse Proxy is more than just a tool—it's a vision for the future of deployment. By combining intuitive interfaces, real-time monitoring, and robust automation, this application aims to make deployment accessible to users of all skill levels. Whether you're deploying a small-scale application or managing a complex infrastructure, SB Reverse Proxy is your trusted companion for efficient, hassle-free domain mapping and containerized deployment.</Heading>
    </Box>
</Box>
    </Box>
  )
}

export default ReverseProxy
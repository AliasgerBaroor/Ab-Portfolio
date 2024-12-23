import { Box } from "@chakra-ui/react";
import TopicHeader from "../headers/TopicHeader";
import TopicMainHeading from "../headers/TopicMainHeading";
import WorkCards from "../cards/WorkCards";
const WorkTab = () => {
  return (
    <Box>
      <TopicHeader Color="pink" Icon={"PiSuitcaseSimpleFill"} HText={"About My Work"} />
      <TopicMainHeading TopicText={"Some of my work as a full stack web developer"} TopicHighlight={["my work", "web"]} color={"var(--color-pink)"} />

      <WorkCards cardText={"VsCode-Portfolio, A portfolio designed with a VS Code-inspired UI, showcasing my skills and projects in a developer-centric layout."} cardQuery={["VsCode", "VS Code-inspired", "developer-centric"]} cardLink={["https://chakra-ui.com", "Learn More"]} cardImage={"work1"} />
      
      <WorkCards cardText={"CMS-Forge, A CMS designed to build custom CMS platforms with pre-rendered components and preset algorithms, streamlining development for dynamic content management."} cardQuery={["CMS-Forge", "pre-rendered", "algorithms"]} cardLink={["https://chakra-ui.com", "Learn More"]} cardImage={"work1"} />
 
      <WorkCards cardText={"ReverseProxy-Manager, An app to create custom reverse proxies with named configurations, Docker image selection, and automatic domain generation like http://reverse.proxy/usergivenname.localhost."} cardQuery={["ReverseProxy-Manager", "automatic domain", "http://reverse.proxy/usergivenname.localhost"]} cardLink={["https://chakra-ui.com", "Learn More"]} cardImage={"work1"} />

    </Box>
  );
};

export default WorkTab;

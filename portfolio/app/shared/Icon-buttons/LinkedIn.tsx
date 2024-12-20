import { IconButton } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa6";
const Linkedin = () => {
  return (
    <IconButton aria-label="Linkedin" variant={"ghost"} color={"gray.400"} size={"2xl"} _hover={
        {
          bg: "var(--bg-lightblack)",
          color: "#fff",
        }
      }>
    <FaLinkedin />
  </IconButton>
  )
}

export default Linkedin
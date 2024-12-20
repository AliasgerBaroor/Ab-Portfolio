import { IconButton } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { FaGithub  } from "react-icons/fa6";
const Github = () => {
  return (
    <IconButton aria-label="Github" variant={"ghost"} color={"gray.400"} size={"2xl"} _hover={
        {
          bg: "var(--bg-lightblack)",
          color: "#fff",
        }
      }>
        <Link to={"https://github.com/AliasgerBaroor"} target="_blank">
    <FaGithub />
        </Link>
  </IconButton>
  )
}

export default Github
import { Icon, VStack } from '@chakra-ui/react'
import { Button } from '~/components/ui/button'
import { VscDebugAltSmall, VscGitMerge, VscSearch, VscFiles,VscRemoteExplorer, VscExtensions,VscAccount, VscSettingsGear } from "react-icons/vsc";
const IconTab = () => {
  return (
    <VStack justifyContent="space-between" alignItems="stretch" h="100%">
    <VStack alignItems={"center"} pr={4} flexGrow={1}>
        <Button variant="ghost" backgroundColor={"var(--bg-lightblack)"} style={{
           borderLeftWidth: "2px",
           borderLeftColor: "var(--color-red)",
           borderLeftStyle: "solid",
        }} _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscFiles  />
            </Icon>
        </Button>
        <Button variant="ghost" _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscSearch />
            </Icon>
        </Button>
        <Button variant="ghost" _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscGitMerge  />
            </Icon>
        </Button>
        <Button variant="ghost" _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscDebugAltSmall />
            </Icon>
        </Button>
        <Button variant="ghost" _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscExtensions  />
            </Icon>
        </Button>
        <Button variant="ghost" _hover={
              {
                bg: "var(--bg-lightblack)",
              }
            }>
            <Icon size={"lg"} color={"var(--color-white)"}>
                <VscRemoteExplorer />
            </Icon>
        </Button>
    </VStack>
    <VStack>
        <Button
          variant="ghost"
          _hover={{
            bg: "var(--bg-lightblack)",
          }}
        >
          <Icon size={"lg"} color={"var(--color-white)"}>
            <VscAccount />
          </Icon>
        </Button>
        <Button
          variant="ghost"
          _hover={{
            bg: "var(--bg-lightblack)",
          }}
        >
          <Icon size={"lg"} color={"var(--color-white)"}>
            <VscSettingsGear />
          </Icon>
        </Button>
      </VStack>
    </VStack>
  )
}

export default IconTab
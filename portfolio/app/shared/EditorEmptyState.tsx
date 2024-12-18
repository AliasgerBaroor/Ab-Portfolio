import { List, Kbd } from "@chakra-ui/react"
import { EmptyState } from "~/components/ui/empty-state"
import { HiColorSwatch } from "react-icons/hi"
const EditorEmptyState = () => {
  return (
    <EmptyState
    icon={<HiColorSwatch />}
    size={"lg"}
    title="Check this shortcuts..."
  >
    <List.Root variant="marker" gap={4}>
      <List.Item>Open Welcome tab: <Kbd ms={2}>ctrl</Kbd>+<Kbd>n</Kbd></List.Item>
      <List.Item>Open About tab: <Kbd ms={2}>ctrl</Kbd>+<Kbd>a</Kbd></List.Item>
      <List.Item>Open Works tab: <Kbd ms={2}>ctrl</Kbd>+<Kbd>w</Kbd></List.Item>
      <List.Item>Open Education tab: <Kbd ms={2}>ctrl</Kbd>+<Kbd>e</Kbd></List.Item>
      <List.Item>Open Contact tab: <Kbd ms={2}>ctrl</Kbd>+<Kbd>t</Kbd></List.Item>
    </List.Root>
  </EmptyState>
  )
}

export default EditorEmptyState
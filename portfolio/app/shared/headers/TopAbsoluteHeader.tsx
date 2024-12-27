import { Flex, Icon, Text } from '@chakra-ui/react'
import { Copy } from 'lucide-react'
import { BsLayoutSidebarInset, BsReverseLayoutSidebarReverse } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { LuLayoutPanelLeft } from 'react-icons/lu'
import { RxCross2 } from 'react-icons/rx'
import { TbLayoutBottombar } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { Button } from '~/components/ui/button'

type topHeaderObjectProps = {
    id: string,
    title: string 
}

type topHeaderArrayProps = {
    topHeader: topHeaderObjectProps[],
    setSimpleFolio: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopAbsoluteHeader: React.FC<topHeaderArrayProps> = ({ topHeader, setSimpleFolio }) => {
  return (
    <Flex alignItems={"center"} pb={4} pl={4} justifyContent={"space-between"}>
    <Flex alignItems={"center"}>
      <Icon size={"xl"} me={2}>
        <VscVscode color="#29b6f6" />
      </Icon>
      {topHeader.map(tHead => (
        <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
          {
            bg: "var(--bg-lightblack)",
          }
        }>{tHead.title}</Button>
      ))}
    </Flex>
    <Text>Aliasger Bohra - Portfolio</Text>
    <Flex alignItems={"center"}>
      <Icon me={2}>
        <LuLayoutPanelLeft />
      </Icon>
      <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
        {
          bg: "var(--bg-lightblack)",
        }
      }><BsLayoutSidebarInset /></Button>
      <Button variant="ghost" color={"var(--color-white)"} size={"md"} _hover={
        {
          bg: "var(--bg-lightblack)",
        }
      }><TbLayoutBottombar /></Button>
      <Button variant="ghost" color={"var(--color-white)"} size={"sm"} _hover={
        {
          bg: "var(--bg-lightblack)",
        }
      }><BsReverseLayoutSidebarReverse /></Button>
      <Button variant="ghost" me={2} color="gray.400" _hover={
        {
          bg: "var(--bg-lightblack)",
          color: "#fff",
        }
      }>
        <Icon size={"xs"} _hover={
          {
            color: "#fff",
          }
        }>
          <FaMinus />
        </Icon>
      </Button>
      <Button variant="ghost" me={2} color="gray.400" _hover={
        {
          bg: "var(--bg-lightblack)",
          color: "#fff",
        }
      }>
        <Icon size={"sm"} _hover={
          {
            color: "#fff",
          }
        }>
          <Copy />
        </Icon>
      </Button>
      <Button variant="ghost" me={2} onClick={() => setSimpleFolio(true)} color="gray.400" _hover={
        {
          bg: "var(--color-red)",
          color: "#fff",
        }
      }>
        <Icon size={"md"} _hover={
          {
            color: "#fff",
          }
        }>
          <RxCross2 />
        </Icon>
      </Button>
    </Flex>
  </Flex>
  )
}

export default TopAbsoluteHeader
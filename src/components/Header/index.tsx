import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./SearchBox";

export function Header(){

  const {onOpen} = useSideBarDrawer()

  const isWideSize = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      mb='10'
      px='6'
      align='center'
    >

      {!isWideSize && (
        <IconButton
        aria-label='Open navigation' 
        icon={<Icon as={RiMenuLine}/>}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        >

        </IconButton>
      )}

      <Logo/>
      {isWideSize && <Search/>}
      <Flex
        align='center'
        ml='auto'
      >
        <Notifications/>
        <Profile showDataUser={isWideSize} />
      </Flex>
   
    </Flex>

  )
}
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./SearchBox";

export function Header(){
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
import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notifications } from "./Notifications";
import { Profile } from "./Profile";
import { Search } from "./SearchBox";

export function Header(){
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
      <Search/>
      <Flex
        align='center'
        ml='auto'
      >
        <Notifications/>
        <Profile/>
      </Flex>
   
    </Flex>

  )
}
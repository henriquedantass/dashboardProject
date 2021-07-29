import { Flex, Box, Text, Avatar } from "@chakra-ui/react";


interface ProfileProps {
  showDataUser: boolean;
}

export function Profile({showDataUser = true}: ProfileProps){
  return (
    <Flex
        align='center'
        >
      {showDataUser && (
          <Box mr='4' textAlign='right'>
           <Text>Henrique Dantas</Text>
           <Text color='gray.300' fontSize='small'>henrique@hotmail.ph</Text>
         </Box>
      )}
      <Avatar size='md' src='https://github.com/henriquedantass.png'/>
    </Flex>
  );
}
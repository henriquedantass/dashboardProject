import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
  return (
    <Flex
        align='center'
        >
          <Box mr='4' textAlign='right'>
            <Text>Henrique Dantas</Text>
            <Text color='gray.300' fontSize='small'>henrique@hotmail.ph</Text>
          </Box>
          <Avatar size='md' name='Henrique Dantas' src='https://github.com/henriquedantass.png'/>
    </Flex>
  );
}
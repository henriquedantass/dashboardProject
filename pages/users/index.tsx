import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../src/components/Header";
import { Pagination } from "../../src/components/Pagination/Index"
import { Sidebar } from "../../src/components/Sidebar";

export default function UserList(){
  const isWideSize = useBreakpointValue({
    base:false,
    lg: true,
  })


  return (
    <Box>
      <Header/>
      <Flex w='100%' maxWidth={1480} mx='auto' px='6'>
        <Sidebar/>
        <Box 
        flex="1" 
        bg='gray.800'  
        p='8'
        borderRadius={8}
        >
          <Flex 
          mb='8'
          align="center" 
          justify="space-between"
          >
            <Heading
            fontWeight='normal' 
            size='lg'
            >
              Usuários
            </Heading>
            <Button 
            size='sm'
            fontSize='sm'
            leftIcon={<Icon as={RiAddLine} fontSize='20px'/>}
            colorScheme='pink'
            as="a"
            >
              Criar novo
            </Button>
          </Flex>
          <Table>
            <Thead>
              <Tr>
                <Th px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink'/>
                </Th>
                <Th>Usuário</Th>
               { isWideSize && <Th>Data de cadastro</Th>}
               { isWideSize && <Th width='8'></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4','4','6']}>
                  <Checkbox colorScheme='pink'/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Henrique Dantas</Text>
                    <Text fontSize='small' color='gray.300'>henrique@hotmail.ph</Text>
                  </Box>
                </Td>
                { isWideSize && <Td>04 de abr de 2020</Td>}
                { isWideSize && (<Td>
                <Button 
                  size='sm'
                  fontSize='sm'
                  leftIcon={<Icon as={RiPencilLine} fontSize='16px'/>}
                  colorScheme='purple'
                  as="a"
                  >
                    Editar
                  </Button>
                </Td>)}
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>

      </Flex>
    </Box>
  );
}
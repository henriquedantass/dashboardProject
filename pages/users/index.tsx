import { Spinner , Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../src/components/Header";
import { Pagination } from "../../src/components/Pagination/Index"
import { Sidebar } from "../../src/components/Sidebar";
import { useQuery } from 'react-query'
import Link from 'next/link'




export default function UserList(){
  const {data, isLoading, error} = useQuery('users' , async () => {
    const response = await fetch('http://localhost:3001/api/users');
    const data = await response.json();

    const users = data.users.map( user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-br' , {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      }
    })

    return users
  })

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
            <Link href="/users/create" passHref>
            <Button 
            size='sm'
            fontSize='sm'
            leftIcon={<Icon as={RiAddLine} fontSize='20px'/>}
            colorScheme='pink'
            as="a"
            >
              Criar novo
            </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify='center'>
              <Spinner/>
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Occoreu um error ao buscar os usuários</Text>
            </Flex>
          ) : (
            <>
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
              {data.map(user => {
                return (
                  <Tr key = {user.id}>
                    <Td px={['4','4','6']}>
                      <Checkbox colorScheme='pink'/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight='bold'>{user.name}</Text>
                        <Text fontSize='small' color='gray.300'>{user.email}</Text>
                      </Box>
                    </Td>
                    { isWideSize && <Td>{user.createdAt}</Td>}
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
                    </Td>
                    )}
                </Tr>
                )
              })}
            </Tbody>
          </Table>
            <Pagination/>
            </>
          )}
        </Box>

      </Flex>
    </Box>
  );
}
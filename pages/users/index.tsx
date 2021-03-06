import { Spinner , Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, HStack, Link } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine, RiRefreshLine } from "react-icons/ri";
import { Header } from "../../src/components/Header";
import { Pagination } from "../../src/components/Pagination/Index"
import { Sidebar } from "../../src/components/Sidebar";
import NextLink from 'next/link'
import { useUsers } from "../../src/services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../src/services/queryClient";
import { api } from "../../src/services/api";




export default function UserList(){
  const [page, setPage] = useState(1);
  const {data, isLoading, isFetching ,error , refetch} = useUsers(page)


  async function handlePrefetchUser (userId: string){
    await queryClient.prefetchQuery(['user', userId] , async() => {
      const response = await api.get(`users/${userId}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }


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
            {!isLoading && isFetching && 
            <Spinner size='sm' ml='4' color='gray.500'/>
            }
            </Heading>
            <HStack spacing='10px'>
            <Button 
              size='sm'
              fontSize='sm'
              leftIcon={<Icon as={RiRefreshLine} fontSize='20px'/>}
              colorScheme='pink'
              onClick={() => {refetch()}}
            >
              Atualizar
            </Button>
            <NextLink href="/users/create" passHref>
              <Button 
              size='sm'
              fontSize='sm'
              leftIcon={<Icon as={RiAddLine} fontSize='20px'/>}
              colorScheme='pink'
              as="a"
              >
                Criar novo
              </Button>
            </NextLink>

            </HStack>
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
              {data.users.map(user => {
                return (
                  <Tr key = {user.id}>
                    <Td px={['4','4','6']}>
                      <Checkbox colorScheme='pink'/>
                    </Td>
                    <Td>
                      <Box>
                        <Link 
                          color='purple.400' 
                          onMouseEnter={() => handlePrefetchUser(user.id) }
                        >
                          <Text fontWeight='bold'>{user.name}</Text>
                        </Link>
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
            <Pagination 
              totalCountOfRegisters={data.totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
            </>
          )}
        </Box>

      </Flex>
    </Box>
  );
}
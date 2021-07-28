import { Box, Flex, Heading, Divider, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../src/components/Form/input";
import { Header } from "../../src/components/Header";
import { Sidebar } from "../../src/components/Sidebar";

export default function CreateUser(){
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
          <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>
          <Divider my='6' borderColor='gray.700'></Divider>
          <VStack spacing='8'>
              <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                 <Input name='name ' label='Nome completo'/>
                 <Input name='email ' type='email' label='E-mail'/>
              </SimpleGrid>
              <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                 <Input name='password ' type='password' label='Senha'/>
                 <Input name='password-confirmation ' type='password-confirmation' label='Confirmar senha'/>
              </SimpleGrid>
          </VStack>
          <Flex mt='8' justify='flex-end'> 
                  <HStack spacing='4'>
                    <Button colorScheme='whiteAlpha'>Cancelar</Button>
                    <Button colorScheme='pink'>Criar</Button>
                  </HStack>
              </Flex>
        </Box>

      </Flex>
    </Box>
  );
}
import {Flex} from '@chakra-ui/react'
import React from 'react';
import { Header } from '../src/components/Header';
import { Sidebar } from '../src/components/Sidebar';

export default function Dashboard(){
  return (
    <Flex flexDir='column' h='100vh'> 
      <Header/>
      <Flex w='100%' maxWidth={1480} mx='auto' px='6'>
        <Sidebar/>
      </Flex>
    </Flex>
  )
}

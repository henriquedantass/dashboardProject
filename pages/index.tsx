import {Flex, Button, Stack } from '@chakra-ui/react'
import {Input} from '../src/components/form/input'

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex 
      flexDir = 'column'
      as='form'
      width='100%'
      maxWidth={360}
      bg='gray.800'
      p='8'
      borderRadius={8}
      >
        <Stack spacing={5}>
          <Input name='email' type="email" label='E-mail'/>
          <Input name='password' type="password" label='Password'/>
        </Stack>
        <Button type='submit' mt='4' size='lg' colorScheme='pink'>Entrar</Button>
      </Flex>
    </Flex>
  )
}

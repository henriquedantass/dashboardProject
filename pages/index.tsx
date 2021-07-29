import {Flex, Button, Stack } from '@chakra-ui/react'
import { useForm , SubmitHandler} from 'react-hook-form'
import {Input} from '../src/components/Form/input'

type SignFormData = {
  email: string,
  password: string,
}

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm()


  const handleSignIn:SubmitHandler<SignFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values)
  }

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
      onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={5}>
          <Input {...register('email')} name='email' type="email" label='E-mail'/>
          <Input {...register('password')} name='password' type="password" label='Password'/>
        </Stack>
        <Button 
         type='submit'
         mt='4' 
         size='lg' 
         colorScheme='pink'
         isLoading= {formState.isSubmitting}
         >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

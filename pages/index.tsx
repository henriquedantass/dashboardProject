import {Flex, Button, Stack } from '@chakra-ui/react'
import { useForm , SubmitHandler} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {Input} from '../src/components/Form/input'

type SignFormData = {
  email: string,
  password: string,
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })



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
          <Input 
          name='email' 
          type="email" 
          label='E-mail'
          {...register('email')} 
          error = {formState.errors.email}
          />
          <Input 
          {...register('password')}
           name='password' 
           type="password" 
           label='Password'
           error = {formState.errors.password}
           />
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

import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

const AuthForm = () => {
  return (
    <Flex
      as='form'
      boxShadow='lg'
      borderRadius='7px'
      w={['100%', '50%']}
      direction='column'
      p='5'
      bgColor='white'
    >
      <Text textAlign='center' fontSize='2xl'>
        Authorization
      </Text>

      <FormControl pt='3' id='email' isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input placeholder='Name' />
      </FormControl>

      <FormControl pt='3' id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <Input placeholder='Password' />
      </FormControl>

      <Flex pt='5' justify='center'>
        <Button colorScheme='telegram'>Sign in</Button>
      </Flex>
    </Flex>
  );
};

export default AuthForm;

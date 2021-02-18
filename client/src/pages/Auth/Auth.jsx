import { Flex } from '@chakra-ui/react';
import AuthForm from './components/AuthForm';

const Auth = () => {
  return (
    <Flex h='100%' justify='center' direction='column' align='center'>
      <AuthForm />
    </Flex>
  );
};

export default Auth;

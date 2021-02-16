import { Flex, Container } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Flex bgColor='gray.100' as='main' flex='1'>
      <Container maxW='5xl'>{children}</Container>
    </Flex>
  );
};

export default Main;

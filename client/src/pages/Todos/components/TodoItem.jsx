import { Flex, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const TodoItem = ({ id, name, description, dateCreated }) => {
  return (
    <Flex
      direction='column'
      bgColor='white'
      p='3'
      borderRadius='7px'
      boxShadow='lg'
    >
      <Link to={`todo/${id}`}>
        <Text fontSize='2xl'>{name}</Text>
      </Link>
      <Text>{description}</Text>
      <Flex align='center' justify='space-around' pt='3'>
        <Text color='blue.400'>{dateCreated}</Text>
        <Button colorScheme='telegram'>Delete</Button>
      </Flex>
    </Flex>
  );
};

export default TodoItem;

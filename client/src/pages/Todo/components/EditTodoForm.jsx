import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const EditTodoForm = ({ todo }) => {
  return (
    <Flex
      as='form'
      boxShadow='lg'
      borderRadius='7px'
      w={['100%', '70%']}
      direction='column'
      p='5'
      bgColor='white'
    >
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Name' />
      </FormControl>

      <FormControl id='description'>
        <FormLabel>Description</FormLabel>
        <Textarea height='md' placeholder='Description' />
      </FormControl>

      <Flex pt='5' justify='center'>
        <Button colorScheme='telegram' mr={3}>
          Save
        </Button>
        <Button colorScheme='red'>Cancel</Button>
      </Flex>
    </Flex>
  );
};

export default EditTodoForm;

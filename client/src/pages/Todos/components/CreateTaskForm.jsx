import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react';

const CreateTodoForm = () => {
  return (
    <form>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Name' />
      </FormControl>

      <FormControl id='description'>
        <FormLabel>Description</FormLabel>
        <Textarea height='md' placeholder='Description' />
      </FormControl>
    </form>
  );
};

export default CreateTodoForm;

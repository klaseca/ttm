import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';

import CreateTodoForm from './CreateTaskForm';

const CreateTodo = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size='2xl'
      scrollBehavior='inside'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create todo</ModalHeader>
        <ModalBody>
          <CreateTodoForm />
        </ModalBody>

        <ModalFooter justifyContent='center'>
          <Button colorScheme='telegram' mr={3} onClick={onClose}>
            Save
          </Button>
          <Button colorScheme='red' onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTodo;

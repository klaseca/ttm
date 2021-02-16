import { Grid, Button, useDisclosure } from '@chakra-ui/react';
import TodoItem from './components/TodoItem';
import CreateTodo from './components/CreateTodo';

import { useSelector } from 'react-redux';
import { selectAllTodos } from 'store/userSlice';
import NotTodos from './components/NotTodos';

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const todos = useSelector(selectAllTodos);

  return (
    <>
      {todos.length ? (
        <Grid column='1' gap='4' py='4'>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </Grid>
      ) : (
        <NotTodos />
      )}
      <Button
        borderRadius='50%'
        colorScheme='telegram'
        pos='absolute'
        right='2rem'
        bottom='2rem'
        boxSize='3rem'
        onClick={onOpen}
      >
        +
      </Button>
      <CreateTodo isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Todos;

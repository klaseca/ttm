import { Grid, Button, useDisclosure } from '@chakra-ui/react';
import TodoItem from './components/TodoItem';
import CreateTodo from './components/CreateTodo';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTodos, selectEmail } from 'store/userSlice';
import NotTodos from './components/NotTodos';
import { useWs } from 'hooks/useWs';
import { useEffect, useState } from 'react';
import { removeTodo } from 'store/userSlice';

const Todos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const todos = useSelector(selectAllTodos);
  const email = useSelector(selectEmail);
  const ws = useWs({ url: 'ws://localhost:3001' });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (ws.data && ws.data.message.event === 'removeTodo') {
      const { error, data } = ws.data.message;
      if (error) {
        setError(error);
      } else {
        dispatch(removeTodo(data));
      }
    }
  }, [ws.data, dispatch]);

  return (
    <>
      {todos.length ? (
        <Grid column='1' gap='4' py='4'>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} ws={ws} email={email} />
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

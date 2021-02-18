import EditTodoForm from './components/EditTodoForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTodoById } from 'store/userSlice';
import { Flex } from '@chakra-ui/react';

const Todo = () => {
  const { id } = useParams();
  const todo = useSelector((state) => selectTodoById(state, id));
  return (
    <Flex h='100%' justify='center' align='center'>
      <EditTodoForm todo={todo} />
    </Flex>
  );
};

export default Todo;

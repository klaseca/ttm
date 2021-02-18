import { Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useWs } from 'hooks/useWs';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, updateTodo } from 'store/userSlice';
import { useEffect, useState, useCallback } from 'react';

const EditTodoForm = ({ todo }) => {
  const history = useHistory();
  const toHome = useCallback(() => history.push('/'), [history]);

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    description: yup.string(),
  });

  const ws = useWs({ url: 'ws://localhost:3001' });

  const [error, setError] = useState('');

  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ws.data && ws.data.message.event === 'updateTodo') {
      const { error, data } = ws.data.message;
      if (error) {
        setError(error);
      } else {
        dispatch(updateTodo(data));
        toHome();
      }
    }
  }, [ws.data, dispatch, toHome]);

  return (
    <Formik
      initialValues={{ name: todo.name, description: todo.description }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
        const request = {
          event: 'updateTodo',
          payload: { email, id: todo.id, ...values },
        };
        console.log(ws);
        ws.send(request);
      }}
    >
      <Flex
        as={Form}
        boxShadow='lg'
        borderRadius='7px'
        w={['100%', '70%']}
        direction='column'
        p='5'
        bgColor='white'
      >
        <FormikInput name='name' label='Name' placeholder='Todo name' />

        <FormikInput
          name='description'
          label='Description'
          placeholder='Description'
          isTextarea
          h='md'
        />

        <Flex pt='5' justify='center'>
          <Button type='submit' colorScheme='telegram' mr={3}>
            Save
          </Button>
          <Button colorScheme='red' onClick={toHome}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Formik>
  );
};

export default EditTodoForm;

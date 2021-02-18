import { Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useWs } from 'hooks/useWs';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmail, addTodo } from 'store/userSlice';

const CreateTodoForm = ({ onClose }) => {
  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    description: yup.string(),
  });

  const ws = useWs({ url: 'ws://localhost:3001' });

  const [error, setError] = useState('');

  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ws.data && ws.data.message.event === 'addTodo') {
      const { error, data } = ws.data.message;
      if (error) {
        setError(error);
      } else {
        dispatch(addTodo(data));
        onClose();
      }
    }
  }, [ws.data, dispatch, onClose]);

  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
        const dateCreated = new Intl.DateTimeFormat('ru-RU').format(new Date());
        const request = {
          event: 'addTodo',
          payload: { ...values, dateCreated, email },
        };
        ws.send(request);
      }}
    >
      <Form>
        <FormikInput name='name' label='Name' placeholder='Todo name' />

        <FormikInput
          name='description'
          label='Description'
          placeholder='Description'
          isTextarea
          h='md'
        />

        <Flex justify='center' p='2'>
          <Button type='submit' colorScheme='telegram' mr={3}>
            Save
          </Button>
          <Button colorScheme='red' onClick={onClose}>
            Cancel
          </Button>
        </Flex>
      </Form>
    </Formik>
  );
};

export default CreateTodoForm;

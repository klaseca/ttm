import { Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const EditTodoForm = ({ todo }) => {
  const history = useHistory();
  const toHome = () => history.push('/');

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    description: yup.string(),
  });

  return (
    <Formik
      initialValues={{ name: todo.name, description: todo.description }}
      validationSchema={validationSchema}
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

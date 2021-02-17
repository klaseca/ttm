import { Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';

const CreateTodoForm = ({ onClose }) => {
  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    description: yup.string(),
  });

  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={validationSchema}
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
          <Button colorScheme='telegram' mr={3} onClick={onClose}>
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

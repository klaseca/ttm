import { Flex, Text, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';

const AuthForm = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().min(6, 'Minimum 6 symbols').required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
    >
      <Flex
        as={Form}
        boxShadow='lg'
        borderRadius='7px'
        w={['100%', '50%']}
        direction='column'
        p='5'
        bgColor='white'
      >
        <Text textAlign='center' fontSize='2xl'>
          Authorization
        </Text>

        <FormikInput name='email' label='Email' placeholder='Email' />

        <FormikInput name='password' label='Password' placeholder='Password' />

        <Flex pt='5' justify='center'>
          <Button type='submit' colorScheme='telegram'>
            Sign in
          </Button>
        </Flex>
      </Flex>
    </Formik>
  );
};

export default AuthForm;

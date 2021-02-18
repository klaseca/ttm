import { Flex, Text, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import FormikInput from 'components/FormikInput';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useWs } from 'hooks/useWs';
import { Redirect } from 'react-router-dom';
import { auth } from 'store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectEmail } from 'store/userSlice';

const AuthForm = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().min(6, 'Minimum 6 symbols').required('Required'),
  });

  const ws = useWs({ url: 'ws://localhost:3001' });

  const [error, setError] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (ws.data && ws.data.message.event === 'auth') {
      const { error, data } = ws.data.message;
      if (error) {
        setError(error);
      } else {
        dispatch(auth(data));
      }
    }
  }, [ws.data, dispatch]);

  const isAuth = useSelector(selectEmail);

  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const request = { event: 'auth', payload: values };
          ws.send(request);
        }}
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

          <FormikInput
            name='password'
            type='password'
            label='Password'
            placeholder='Password'
          />

          <Flex pt='5' justify='center'>
            <Button type='submit' colorScheme='telegram'>
              Sign in
            </Button>
          </Flex>
        </Flex>
      </Formik>
      {error && (
        <Flex pt='4' color='red.500'>
          {error}
        </Flex>
      )}
    </>
  );
};

export default AuthForm;

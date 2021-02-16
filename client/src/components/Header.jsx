import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEmail } from 'store/userSlice';

const Header = () => {
  const email = useSelector(selectEmail);
  return (
    <Flex bgColor='gray.400' as='nav' p='3' justify='space-between'>
      <Link to='/'>TTM</Link>
      {email ? <Text>{email}</Text> : <Link to='/auth'>Sign in</Link>}
    </Flex>
  );
};

export default Header;

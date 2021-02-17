import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEmail } from 'store/userSlice';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = useSelector(selectEmail);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

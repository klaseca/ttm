import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Header from 'components/Header';
import Main from 'components/Main';
import Todos from 'pages/Todos/Todos';
import Todo from 'pages/Todo/Todo';
import Auth from 'pages/Auth/Auth';

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <PrivateRoute path='/' exact>
            <Todos />
          </PrivateRoute>
          <PrivateRoute path='/todo/:id'>
            <Todo />
          </PrivateRoute>
          <Route path='/auth'>
            <Auth />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

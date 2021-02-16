import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
          <Route path='/' exact>
            <Todos />
          </Route>
          <Route path='/todo/:id'>
            <Todo />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

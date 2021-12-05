import { Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Nav from './components/Nav/Nav';
import {
  tokenSelector,
  loadingSelector,
} from './redux/selectors';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import(
    './pages/HomePage' /* webpackChunkName: "home-page" */
  )
);
const ToDoPage = lazy(() =>
  import(
    './pages/ToDoPage' /* webpackChunkName: "todo-page" */
  )
);
const CounterPage = lazy(() =>
  import(
    './pages/CounterPage' /* webpackChunkName: "todo-page" */
  )
);
const AuthPage = lazy(() =>
  import('./pages/AuthPage' /* webpackChunkName: "auth" */)
);

const App = () => {
  const token = useSelector(tokenSelector);
  const loading = useSelector(loadingSelector);

  const title = 'Home Page';

 
  return (
    <div className='App'>

      <Suspense fallback={<h1>Loading...</h1>}>
        {loading && <Loader />}
        {token ? (
          <>
            <Nav />
            <Switch>
              <Route path='/' exact>
                <HomePage title={title} />
              </Route>
              <Route
                path='/counter'
                component={CounterPage}
              />
              <Route path='/todo' component={ToDoPage} />
              <Redirect to='/' />
            </Switch>
          </>
        ) : (
          <AuthPage />
        )}
      </Suspense>
    </div>
  );
};

export default App;

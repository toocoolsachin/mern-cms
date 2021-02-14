import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Home from './components/posts/Posts';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AddPost from './components/posts/AddPost';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

// styling
import './App.css';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/addpost' component={AddPost} />
              <Route exact path='/post/:id' component={Post} />
              <Route component={NotFound} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

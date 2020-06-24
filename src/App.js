import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Login from './components/user/Login'
import Register from './components/user/Register'
import MainPage from './components/main/MainPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/user/login">Login</Link>
        <Link to="/user/register">Register</Link>
        <Link to="/main">Main</Link>
      </div>
      <Switch>
        <Route path="/user/login" component={Login} exact={true} />
        <Route path="/user/register" component={Register} exact={true}/>
        <Route path="/main" component={MainPage} exact={true}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

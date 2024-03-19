// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import UserListView from './userlistview';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/userlist" component={UserListView} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import NewAccount from './components/Registration/NewAccount';
import SignUpPage from './components/Registration/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import LoginForm from './components/LoginForm/LoginForm';


import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';


function App() {


  return (
    <Router>

      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact={true}>
            <LoginForm />
          </Route>

          <PublicRoute path="/login" component={LoginForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/register" render={(props) => <NewAccount {...props} />} />
          <Route path="/signup" render={(props) => <SignUpPage {...props} />} />
          {/*<Route path="/login" render={(props) => <LoginForm {...props} />} />*
                <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />*/}

        </Switch>
      </div>
    </Router>

  );
}

export default App;

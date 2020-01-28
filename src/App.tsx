import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../src/routes/private-route';
import Register from '../src/components/Register/Register';
import Login from '../src/components/Login/Login';
import Home from '../src/components/Home/Home';

const App: React.FC = () => {

  return (
      <Router>
        <div>
            <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path={"/home"} component={Home} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;

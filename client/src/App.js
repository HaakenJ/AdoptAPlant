
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLogin from './pages/login.js'
import SignUp from "./pages/signup.js";
import Welcome from './pages/welcome.js';
import Landing from './pages/landing';
import NotFound from './pages/notFound.js'
import MyAccount from './pages/myAccount.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path="/log-in" component={UserLogin} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/myaccount" component={MyAccount} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;








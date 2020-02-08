
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import UserLogin from './pages/login.js'
import SignUp from "./pages/signup.js";
import Welcome from './pages/welcome.js';
import Landing from './pages/landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path="/log-in" component={UserLogin} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/landing" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;








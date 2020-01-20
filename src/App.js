import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LangingPage from './views/LandingPage';
import Signup from './views/Signup';
import Login from './views/Login';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={LangingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </>
);

export default App;

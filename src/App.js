import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LangingPage from './views/LandingPage';
import Signup from './views/Signup';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={LangingPage} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  </>
);

export default App;

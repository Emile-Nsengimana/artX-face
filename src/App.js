import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LangingPage from './views/LandingPage';


const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={LangingPage} />
      </Switch>
    </Router>
  </>
);

export default App;

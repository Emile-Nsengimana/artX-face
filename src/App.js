import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  <>
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <h1>Welcome to artX</h1>}
        />
        <Route
          path="/art"
          component={() => <h1>arts page</h1>}
        />
      </Switch>
    </Router>
  </>
);

export default App;

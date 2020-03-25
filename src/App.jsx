import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  Main,
  Settings,
} from 'features';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

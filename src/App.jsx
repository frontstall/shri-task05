import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {
  BuildPage,
  HistoryPage,
  MainPage,
  SettingsPage,
} from 'features';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/builds/:buildId">
          <BuildPage />
        </Route>
        <Route path="/builds/">
          <HistoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { ROUTES } from 'config';

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
        <Route exact path={ROUTES.root}>
          <MainPage />
        </Route>
        <Route path={ROUTES.settings}>
          <SettingsPage />
        </Route>
        <Route path={`${ROUTES.build}:buildId"`}>
          <BuildPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

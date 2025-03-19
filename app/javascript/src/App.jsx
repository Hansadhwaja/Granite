import React from "react";

import Dashboard from "components/Dashboard";
import CreateTask from "components/Tasks/Create";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/about" render={() => <div>About</div>} />
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={CreateTask} path="/tasks/create" />
    </Switch>
  </Router>
);

export default App;

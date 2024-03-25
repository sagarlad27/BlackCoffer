import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={DashboardLayout} />
          {/* Add more routes if needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
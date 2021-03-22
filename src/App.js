import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/leagues/:idLeague">
            <LeagueDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

  )

}

export default App;

import React from 'react';
import ThankYou from './ThankYou';
import Squeeze from './Squeeze';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/squeeze">
            <Squeeze />
          </Route>
          <Route path="/thank-you">
            <ThankYou />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
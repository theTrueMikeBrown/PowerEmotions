import React from 'react';
import ThankYou from './ThankYou';
import Squeeze from './Squeeze';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}

function Home() {
  return <Redirect to='/squeeze' />;
}
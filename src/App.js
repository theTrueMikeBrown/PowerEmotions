import React from 'react';
import ThankYou from './ThankYou';
import {Squeeze} from './Squeeze';
import {Funnel} from './Funnel';
import PrivacyPolicy from './PrivacyPolicy';
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
        <Route path="/frustration-free-jumpstart">
          <Squeeze />
        </Route>
        <Route path="/thank-you">
          <ThankYou />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <Redirect to='/frustration-free-jumpstart' />;
}
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Results } from './Results';
import { Sales } from './Sales';
import { Quiz } from './Quiz';
import { Funnel } from './Funnel';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// render={() => { window.location.href = "quiz.big.html" }} />
// render={() => { window.location.href = "quizForm.big.html" }} />

export default function App() {
  const matches = useMediaQuery('(min-width:800px)');
  
  return (matches ?
    <Router>
      <Switch>
        <Route path="/frustration-free-jumpstart"
          render={() => { window.location.href = "invite.big.html" }} />
        <Route path="/thank-you"
          render={() => { window.location.href = "thankYou.big.html" }} />
        <Route path="/before">
          <Quiz />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/transformingmotherhood">
          <Sales />
        </Route>
        <Route path="/transforming-motherhood">
          <Sales />
        </Route>
        <Route path="/results/:id">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    :
    <Router>
      <Switch>
        <Route path="/frustration-free-jumpstart"
          render={() => { window.location.href = "invite.small.html" }} />
        <Route path="/thank-you"
          render={() => { window.location.href = "thankYou.small.html" }} />
        <Route path="/before">
          <Quiz />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/funnel">
          <Funnel />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/transformingmotherhood">
          <Sales />
        </Route>
        <Route path="/transforming-motherhood">
          <Sales />
        </Route>
        <Route path="/results/:id">
          <Results />
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
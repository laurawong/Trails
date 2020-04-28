import React from 'react';
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Nearby from './components/Nearby'
import Search from './components/Search'
import './styles/App.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Switch>
            <Route path="/nearby" component={Nearby} />
            <Route path="/search" component={Search} />
            <Route component={Landing} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

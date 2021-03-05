import React from 'react';
import Home from './domain/Home/Home';
import Surah from './domain/Surah/Surah';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/surah/:id' component={Surah} exact />
      </Switch>
    </Router>
  );
}

export default App;

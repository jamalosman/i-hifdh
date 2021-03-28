import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './domain/Home/Home';
import Surah from './domain/Surah/Surah';
import Store from './store';

function App() {
  return (
    <Store>
      <Header url={document.location.pathname} />
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/surah/:id' component={Surah} exact />
        </Switch>
      </Router>
    </Store>
  );
}

export default App;

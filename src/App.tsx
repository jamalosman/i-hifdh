import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './domain/Home/Home';
import Surah from './domain/Surah/Surah';

function App() {
  return (
    <>
      <Header url={document.location.pathname} />
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/surah/:id' component={Surah} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;

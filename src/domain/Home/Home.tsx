import React, { useContext } from 'react';
import { Context } from '../../store';
import QuizScoreTiles from './QuizScoreTiles';
import SurahList from './SurahList';

const Home = () => {

  const [state, dispatch] = useContext(Context);


  return (
    <div className='App'>
      <QuizScoreTiles scores={state.scores} />
      <SurahList />
    </div>
  );
};

export default Home;

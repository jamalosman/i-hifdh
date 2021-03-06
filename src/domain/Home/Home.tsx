import React from 'react';
import SurahList from './SurahList';
import { RouteComponentProps } from 'react-router-dom';
type IHome = {
  id: string;
};
const Home = ({ match }: RouteComponentProps<IHome>) => {
  console.log(match.params);
  return (
    <div className='App'>
      <SurahList />
    </div>
  );
};

export default Home;

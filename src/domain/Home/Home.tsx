import React from 'react';
import Header from '../../components/Header/Header';
import SurahList from '../../components/SurahList/SurahList';
import { RouteComponentProps } from 'react-router-dom';
type IHome = {
  id: string;
};
const Home = ({ match }: RouteComponentProps<IHome>) => {
  let id = match.params.id;
  console.log(match.params);
  return (
    <div className='App'>
      <Header url={id} />
      <SurahList />
    </div>
  );
};

export default Home;

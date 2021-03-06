import React from 'react';
import Header from '../../components/Header/Header';
import { RouteComponentProps } from 'react-router-dom';
import SurahQuiz from '../../components/SurahQuiz/SurahQuiz';
type ISurah = {
  id: string;
};
const Surah = ({ match }: RouteComponentProps<ISurah>) => {
  let id = match.params.id;
  console.log(id);
  return (
    <div className=''>
      <Header />
      <SurahQuiz id={id} />
    </div>
  );
};

export default Surah;

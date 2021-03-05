import React from 'react';
import Header from '../../components/Header/Header';
import { RouteComponentProps } from 'react-router-dom';
type ISurah = {
  id: string;
};
const Surah = ({ match }: RouteComponentProps<ISurah>) => {
  let id = match.params.id;
  console.log(id);
  return (
    <div className=''>
      <Header />
    </div>
  );
};

export default Surah;

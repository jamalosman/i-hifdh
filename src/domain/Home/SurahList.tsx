import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import {getSurahNames, SurahInfo} from '../../services/quranService/quranService';
import { Context } from '../../store';

const Title = styled.h1`
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 5px solid black;
`;

const SurahLink = styled.a`
  padding: 10px;
  display: block;
  height: 100%;
  border-radius: 5px;
  background: #eee;
  margin-bottom: 5px;
  color: rgb(22, 15, 15);
  &:hover {
    background: #cdd;
  }
`;

const SurahListItem = styled.div`
  margin: 20px;
  padding: 0;
`;

const LoadingMessage = styled.h2`
  margin: 20px;
  padding: 0;
`;


function SurahList() {
  const [surahNames, setSurahNames] = useState<SurahInfo[] | null>(null);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    getSurahNames().then(x => {setSurahNames(x)}, e => setSurahNames([]))
  }, []);

  
  const getContent = () => {
    if (surahNames && surahNames.length > 0)
    {
      return surahNames.map((x) => (
        <SurahListItem key={`surah-${x.index}`} >
          <SurahLink href={`/surah/${x.index}`}>
            {x.index}. {x.name}
          </SurahLink>
        </SurahListItem>
      ));
    }
    else return <SurahListItem>Loading...</SurahListItem>
  }

  return (
    <>
      <Title>Surahs</Title>
      <div> {getContent()} </div>
    </>
  );
}

export default SurahList;

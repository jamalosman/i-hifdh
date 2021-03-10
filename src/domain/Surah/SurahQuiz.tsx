import { useState } from 'react';
import styled from 'styled-components';
import { getSurah, Surah } from '../../services/quranService/quranService';

const QuranPara = styled.p`
  font-family: 'KFGQPC-Uthmani';
  font-size: 36px;
  text-align: center;
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 5px solid black;
`;

const LoadingMessage = styled.p`
  font-size: 24px;
  text-align: center;
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 5px solid black;
`;

function SurahQuiz(props: any) {
  const [surah, setSurah] = useState<Surah | null>(null)

  // const surah: Surah = require(`../../resources/surahs/${props.id}.json`);
  getSurah(props.id).then(x => setSurah(x));
                          

  return surah ?
    <QuranPara>{surah.ayas.map(x => <span key={`ayah-${x.index}`} >{x.text}</span>)}</QuranPara> :
    <LoadingMessage>Loading...</LoadingMessage>
}

export default SurahQuiz;

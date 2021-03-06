import styled from 'styled-components';

const QuranPara = styled.p`
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 5px solid black;
`;

type Surah = {
  index: string;
  name: string;
  ayas: Ayah[];
};

type Ayah = {
  index: string;
  text: string;
};

function SurahQuiz(props: any) {
  const surah: Surah = require(`../../resources/surahs/${props.id}.json`);
  const ayas = surah.ayas.map((x) => <span>{x.text}</span>);

  return <QuranPara>{ayas}</QuranPara>;
}

export default SurahQuiz;

import surahs from '../../resources/quran-uthmani.json';
import styled from 'styled-components';

const Title = styled.div`
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

function SurahList() {
  const surahElements = surahs.map((x) => (
    <SurahListItem key={`surah-${x.index}`} >
      <SurahLink href={`/surah/${x.index}`}>
        {x.index}. {x.name}
      </SurahLink>
    </SurahListItem>
  ));

  return (
    <>
      <Title>Surahs</Title>
      <div> {surahElements} </div>
    </>
  );
}

export default SurahList;

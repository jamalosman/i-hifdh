import surahs from '../../resources/quran-uthmani.json';
import styled from 'styled-components';

const SurahListTitle = styled.div`
  padding: 10px 20px;
  margin: 20px;
  border-bottom: 5px solid black;
`;

const SurahListATag = styled.a`
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

const SurahListComp = styled.div``;

const SurahListItem = styled.div`
  margin: 20px;
  padding: 0;
`;

function SurahList() {
  const surahElements = surahs.map((x) => (
    <SurahListItem>
      <SurahListATag as='a' href={`/surah/${x.index}`}>
        {x.index}. {x.name}
      </SurahListATag>
    </SurahListItem>
  ));

  return (
    <>
      <SurahListTitle>Surahs</SurahListTitle>
      <SurahListComp> {surahElements} </SurahListComp>
    </>
  );
}

export default SurahList;

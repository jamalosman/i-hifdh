import surahs from '../../resources/quran-uthmani.json';
import './SurahQuiz.css';

type Surah = {
  index: string,
  name: string,
  ayas: Ayah[]
}

type Ayah = {
  index: string,
  text: string
}

function SurahQuiz(props: any) {
  const surah : Surah = require(`../../resources/surahs/${props.id}.json`);
  const ayas = surah.ayas.map(x => <span>{x.text}</span>)

  return (
    <p className="quran-paragraph">
      {ayas}
    </p>
  );
}

export default SurahQuiz;

import surahs from '../resources/surah-names.json';
import './SurahList.css';

function SurahList() {
  const surahElements = surahs.map(x => 
    <li className="surah-list-item">
      <a className="surah-link" href={`/surahs/${x.index}`}>{x.index}. {x.name}</a>
    </li>);

  return (
    <div className="surah-list-component">
        <h2 className="surah-list-title">Surahs</h2>
        <ul className="surah-list">
          {surahElements}
        </ul>
    </div>
  );
}

export default SurahList;

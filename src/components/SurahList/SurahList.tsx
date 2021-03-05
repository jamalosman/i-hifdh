import surahs from '../../resources/quran-uthmani.json';
import './SurahList.css';

function SurahList() {
  let surahElements = surahs.map((x) => (
    <li className='surah-list-item'>
      <a className='surah-link' href={`/surah/${x.index}`}>
        {x.index}. {x.name}
      </a>
    </li>
  ));

  return (
    <div className='surah-list-component'>
      <h2 className='surah-list-title'>Surahs</h2>
      <ul className='surah-list'>{surahElements}</ul>
    </div>
  );
}

export default SurahList;

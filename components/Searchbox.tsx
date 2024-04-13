import { data } from '@/data/data';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DATATYPE } from '@/types/types';

const Searchbox = () => {
  type DESC = DATATYPE[];
  const [showResults, setResults] = useState([] as DESC);
  const [getVal, setVal] = useState('');

  const router = useRouter();

  const handleSearch = (e: any) => {
    const val = e.target.value;

    if (val.length < 1) {
      return setResults([]);
    }

    const arr = data.filter((v) =>
      Object.values(v).join('').toLowerCase().includes(val.toLowerCase())
    );
    setResults(arr);
    setVal(val);
  };

  const handleClick = (e: any) => {
    const val = getVal;

    if (val.length < 1) {
      return;
    }

    const url = `/search?query=${val}`;
    router.push(url);
  };

  let searchresults;

  if (showResults.length > 0) {
    searchresults = (
      <ul className="showresults">
        {showResults.map((v: any, k) => (
          <li key={k}>
            <Link href={`/search?query=${v.title}`}>
              {v.title}-{v.excerpt}
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    searchresults = '';
  }

  return (
    <div className="searchbox">
      <div className="search-inpt">
        <input
          type="search"
          className="search"
          placeholder="Enter an address, neighbourhood or city "
          onChange={handleSearch}
          id="searchinpt"
        />
        <label htmlFor="searchinpt" onClick={handleClick}>
          Search
        </label>
      </div>

      {searchresults}
    </div>
  );
};

export default Searchbox;

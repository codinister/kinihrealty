import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DATATYPE } from '@/types/types';
import useGetQuery from '@/data/query/useGetQuery';

const Searchbox = () => {
  const path = usePathname();

  const newprop = useGetQuery('new', '/new') || [];
  const rent = useGetQuery('rent', '/rent') || [];
  const sell = useGetQuery('sell', '/sell') || [];
  const buy = useGetQuery('buy', '/buy') || [];
  const propertycat = useGetQuery('propertycat', '/propertycat') || [];

  let data = null;

  if (path === '/buy') {
    data = buy;
  } else if (path === '/new') {
    data = newprop;
  } else if (path === '/rent') {
    data = rent;
  } else if (path === '/sell') {
    data = rent;
  } else {
    data = propertycat;
  }

  type DESC = DATATYPE[];
  const [showResults, setResults] = useState([] as DESC);
  const [getVal, setVal] = useState('');

  const router = useRouter();

  const handleSearch = (e: any) => {
    const val = e.target.value;

    if (val.length < 1) {
      return setResults([]);
    }

    const arr = data.filter((v: any) =>
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

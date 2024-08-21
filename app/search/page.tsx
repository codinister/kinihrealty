'use client';

import Searchresults from '@/components/Searchresults';
import Servicesthumbs from '@/components/Servicesthumbs';
import useGetQuery from '@/data/query/useGetQuery';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const [getCat, setCat] = useState('');


  const data = useGetQuery('propertycat','/propertycat')

  const q = useSearchParams();

  const query = q.get('query');
  const query_val = query || '';

  const cate = q.get('cat');
  const cat_val = cate || '';

  let search_val;
  if (cat_val.length > 0) {
    search_val = cat_val;
  } else {
    search_val = query_val;
  }

  const cat = Object.values(
    data
      .filter((v: any) =>
        Object.values(v)
          .join('')
          .toLowerCase()
          .includes(query_val.toLowerCase())
      )
      .reduce((a: any, b: any) => {
        if (a[b.cat]) {
          a[b.cat] = b;
        } else {
          a[b.cat] = b;
        }
        return a;
      }, {})
  ).map((v: any) => v.cat);

  return (
    <>
      <Servicesthumbs cat={cat} url="/search" />
      <Searchresults val={search_val} />;
    </>
  );
};

export default Search;

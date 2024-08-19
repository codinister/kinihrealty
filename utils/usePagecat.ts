
import useGetQuery from '@/data/query/useGetQuery';
import { useSearchParams } from 'next/navigation';

const usePagecat = (type: string) => {
  const query = useSearchParams();
  const q = query.get('cat');

  const propertycat  = useGetQuery('propertycat', '/propertycat') || []

  let result;
  if (q) {
    result = propertycat.filter((v: any) => v.type === type && v.cat === q);
  } else {
    result = propertycat.filter((v: any) => v.type === type);
  }


  const cat = Object.values(
    propertycat
      .filter((v: any) => v.type === type)
      .reduce((a: any, b: any) => {
        if (a[b.cat]) {
          a[b.cat] = b;
        } else {
          a[b.cat] = b;
        }

        return a;
      }, {})
  ).map((v: any) => v.cat);


  return { result, cat };

};

export default usePagecat;

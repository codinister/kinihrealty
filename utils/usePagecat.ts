import { data } from '@/data/data';
import { useSearchParams } from 'next/navigation';

const usePagecat = (type: string) => {
  const query = useSearchParams();
  const q = query.get('cat');
  let result;
  if (q) {
    result = data.filter((v) => v.type === type && v.cat === q);
  } else {
    result = data.filter((v) => v.type === type);
  }
  const cat = Object.values(
    data
      .filter((v) => v.type === type)
      .reduce((a: any, b) => {
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

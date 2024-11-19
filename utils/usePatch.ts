import { useEffect } from 'react';
import client from '@/data/client';

type usePatchType = {
  ids: string;
  count: number;
};
const usePatch = ({ ids, count }: usePatchType) => {
  useEffect(() => {
    client
      .patch(ids)
      .set({
        tcount: count,
      })
      .commit()
      .then((data) => {  });
  }, [ids, count]);
};

export default usePatch;

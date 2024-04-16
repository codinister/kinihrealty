'use client';

import Housetobuy from '@/components/Housetobuy';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';

const Buy = () => {
  const { result, cat } = usePagecat('buy');
  return (
    <>
      <Servicesthumbs cat={cat} url="/buy" />
      <Housetobuy data={result} />
    </>
  );
};

export default Buy;

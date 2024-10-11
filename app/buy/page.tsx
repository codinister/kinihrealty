'use client';

import Housetobuy from '@/components/Housetobuy';
import Nav from '@/components/Nav';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';

const Buy = () => {
  const { result, cat } = usePagecat('buy');

  console.log(result)
  return (
    <>
    <Nav />
      <Servicesthumbs cat={cat} url="/buy" />
      <Housetobuy data={result} />
    </>
  );
};

export default Buy;

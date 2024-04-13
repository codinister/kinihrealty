'use client';

import Houseforrent from '@/components/Houseforrent';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';

const Rent = () => {
  const { result, cat } = usePagecat('rent');

  return (
    <>
      <Servicesthumbs cat={cat} url="/rent" />
      <Houseforrent data={result} />
    </>
  );
};

export default Rent;

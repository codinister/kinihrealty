'use client';

import Houseforrent from '@/components/Houseforrent';
import Nav from '@/components/Nav';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';


const Rent = () => {
  const { result, cat } = usePagecat('rent');

  return (
  <>
      <Nav />
      <Servicesthumbs cat={cat} url="/rent" />
      <Houseforrent data={result} />
      </>
  );
};

export default Rent;

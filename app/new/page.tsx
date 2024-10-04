'use client';

import Nav from '@/components/Nav';
import Newdevelopment from '@/components/Newdevelopment';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';

const New = () => {
  const { result, cat } = usePagecat('new');
  return (
    <>
        <Nav />
      <Servicesthumbs cat={cat} url="/new" />
      <Newdevelopment data={result} />
    </>
  );
};

export default New;

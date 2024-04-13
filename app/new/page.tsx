'use client';

import Newdevelopment from '@/components/Newdevelopment';
import Servicesthumbs from '@/components/Servicesthumbs';
import usePagecat from '@/utils/usePagecat';

const New = () => {
  const { result, cat } = usePagecat('new');
  return (
    <>
      <Servicesthumbs cat={cat} url="/new" />
      <Newdevelopment data={result} />
    </>
  );
};

export default New;

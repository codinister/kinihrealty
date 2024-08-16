'use client';


import Blog from '@/components/Blog';
import Featuredproperties from '@/components/Featuredproperties';
import Hero from '@/components/Hero';
import Ourservices from '@/components/Ourservices';
import Houseforsale from '@/components/Houseforsale';
import Houseforrent from '@/components/Houseforrent';
import Housetobuy from '@/components/Housetobuy';
import Newdevelopment from '@/components/Newdevelopment';
import { data } from '@/data/data';
import { posts } from '@/data/data';
import { DATATYPE } from '@/types/types';

export default function Home() {
  const obj: DATATYPE[] = data;

  const newd = obj.filter((v) => v.type === 'new').slice(0, 8);
  const rent = obj.filter((v) => v.type === 'rent').slice(0, 8);
  const buy = obj.filter((v) => v.type === 'buy').slice(0, 8);
  const sell = obj.filter((v) => v.type === 'sell').slice(0, 8);

  return (
    <>
      <Hero  />
      <Ourservices />
      <Featuredproperties data={data} />
      <Houseforsale data={sell} />
      <Houseforrent data={rent} />
      <Housetobuy data={buy} />
      <Newdevelopment data={newd} />
      <Blog posts={posts} />
    </>
  );
}

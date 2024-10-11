'use client';

import Blog from '@/components/Blog';
import Featuredproperties from '@/components/Featuredproperties';
import Hero from '@/components/Hero';
import Ourservices from '@/components/Ourservices';
import Houseforsale from '@/components/Houseforsale';
import Houseforrent from '@/components/Houseforrent';
import Housetobuy from '@/components/Housetobuy';
import Newdevelopment from '@/components/Newdevelopment';
import useGetQuery from '@/data/query/useGetQuery';
import Contactsection from '@/components/Contactsection';

export default function Home() {
  
  const newd = useGetQuery('new', '/new') || [];
  const rent = useGetQuery('rent', '/rent') || [];
  const sell = useGetQuery('sell', '/sell') || [];
  const buy = useGetQuery('buy', '/buy') || [];
  const featured = useGetQuery('featured', '/featured') || [];

  return (
    <>
      <Hero />
      <Ourservices />
      <Featuredproperties data={featured} />
 

      <Housetobuy  data={buy} />
      <Houseforrent data={rent} />
      <Newdevelopment data={newd} />
      <Contactsection />
      <Blog />
    </>
  );
}

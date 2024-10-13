'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Services from './Services';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Imagebox = ({ img }: { img: string }) => {
  return (
    <div
      className="serv-img-bx"
      style={{
        backgroundImage: `url('${img}')`,

        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    ></div>
  );
};



const Ourservices = ({ buy, newd, rent, sell }: any) => {
  const set = useGetQuery('abtset', '/settings') || [];

  const [about, showAbout] = useState(false);

  const buys = buy? buy[0]?.image : []
  const newds = newd ? newd[0]?.image : []
  const rents = rent ? rent[0]?.image : []
  const sells = sell ? sell[0]?.image : []



  const aboutstate = about ? 'show' : '';

  return (
    <div className="ourservices">
      <div className="about-us-bar">
        <div onClick={() => showAbout(!about)}>About Us</div>
      </div>
      <div className={`container about-bx ${aboutstate}`}>
        <div>
          <div>
            <h3>About Us</h3>
            <div>{set[0]?.sbout}</div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${set[0]?.pageheader})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      </div>

      <div className="container">
        <h3>Our Solutions</h3>
        <div className="ultitle"></div>
        <div>
          <div>
            <Link href="/sell">
              <Imagebox img={sells} />
              <h4>Sell</h4>
            </Link>
          </div>
          
  
          <div>
            <Link href="/buy">
              <Imagebox img={buys} />
              <h4>Buy</h4>
            </Link>
          </div>

          <div>
            <Link href="/rent">
              <Imagebox img={rents} />
              <h4>Rent</h4>
            </Link>
          </div>

          <div>
            <Link href="/new">
              <Imagebox img={newds} />
              <h4>New Development </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;

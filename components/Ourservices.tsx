'use client';

import useGetQuery from '@/data/query/useGetQuery';
import Services from './Services';
import Link from 'next/link';

const Ourservices = () => {
  const set = useGetQuery('abtset', '/settings') || [];

  return (
    <div className="ourservices">
      <div className="container">
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

        <div>
          <div>
            <Link href="/sell">
              <i className="fa fa-building"></i>
              <h4>Sell</h4>
            </Link>
          </div>

          <div>
            <Link href="/rent">
              <i className="fa fa-institution"></i>
              <h4>Rent</h4>
            </Link>
          </div>

          <div>
            <Link href="/new">
              <i className="fa fa-home"></i>
              <h4>New Development </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;

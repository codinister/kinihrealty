import React from 'react';
import Services from './Services';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Searchbox from './Searchbox';

type DT = {
  cat: string[];
  url: string;
};

const Servicesthumbs = ({ cat, url }: DT) => {
  const query = useSearchParams();
  const q = query.get('query');

  const val = q || '';

  return (
    <>
      <div className="sesrchthumbswrapper">
        <div className="servicesthumbs">
          <div className="services">
            <Services />
          </div>

          <Searchbox />

          <div className="hamburger">
            <Image
              src="/hamburger.jpg"
              alt=""
              width="20"
              height="20"
              title="Categories"
            />
            <div className="categories">
              {cat.map((v, k) => {
                const urls =
                  val.length > 0
                    ? `/search?query=${val}&&cat=${v}`
                    : `${url}?cat=${v}`;

                return (
                  <Link href={urls} key={k}>
                    {v}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicesthumbs;

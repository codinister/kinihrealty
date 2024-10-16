'use client';

import Housetobuy from '@/components/Housetobuy';
import Modal from '@/components/Modal';
import Nav from '@/components/Nav';
import SalesForm from '@/components/SalesForm';
import useGetQuery from '@/data/query/useGetQuery';
import { useState } from 'react';

const Sell = () => {
  const [state, setState] = useState(false);
  const result = useGetQuery('buy', '/buy') || [];

  const salespage = useGetQuery('salespage', '/salespage') || [];

  return (
    <>
      <Nav />
      <div className="sell">
        <div className="hero">
          <div>
            <div>
              <h1>{salespage[0]?.title}</h1>
              <h6>{salespage[0]?.excerpt}</h6>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${salespage[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="content">
          <div
            style={{
              backgroundImage: `url(${salespage[1]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <h2>{salespage[1]?.title}</h2>

            <div>{salespage[1]?.excerpt}</div>

            <button onClick={() => setState(true)}>
              Send your home for sale
            </button>
          </div>
        </div>

        <Housetobuy data={result} />
      </div>

      <Modal component={SalesForm} state={state} setState={setState} />
    </>
  );
};

export default Sell;

'use client';

import Houseforsale from '@/components/Houseforsale';
import Modal from '@/components/Modal';
import SalesForm from '@/components/SalesForm';
import usePagecat from '@/utils/usePagecat';
import { useState } from 'react';

const Sell = () => {
  const [state, setState] = useState(false);

  const { result, cat } = usePagecat('sell');
  return (
    <>
      <div className="sell">
        <div className="hero">
          <div>
            <div>
              <h1>Sell your home with confidence</h1>
              <h6>
                Kinih.Realty is making it simpler to sell your home and move
                forward.
              </h6>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/data/img1.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>

        <div className="content">
          <div
            style={{
              backgroundImage: "url('/data/img4.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div>
            <h2>Sell your home with us</h2>

            <div>
              Deciding to sell your home yourself is referred to as
              for-sale-by-owner (FSBO). The FSBO process is similar to
              traditional selling, but without the help of a real estate agent.
              In this case, you’re responsible for the home prep, marketing,
              showings, and negotiations.
            </div>

            <button onClick={() => setState(true)}>
              Send your home for sale
            </button>
          </div>
        </div>

        <Houseforsale data={result} />
      </div>

      <Modal component={SalesForm} state={state} setState={setState} />
    </>
  );
};

export default Sell;

'use client';
import Form from '@/components/Form';
import Modal from '@/components/Modal';
import SliderCard from '@/components/SliderCard';
import Youtubebox from '@/components/Youtubebox';
import { data } from '@/data/data';
import Googlemap from '@/utils/Googlemap';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Propertydetails = () => {
  const [state, setState] = useState(false);

  const query = useSearchParams();
  const id = query ? query.get('query') : '';

  const [getImg, setImg] = useState('');

  const item = Object.values(data).find((v) => v.id === id);

  //BEGIN ITEM LIST
  const title = item?.title;
  const cat = item?.cat;
  const price = item?.price;
  const type = item?.type;
  const img = item?.img;
  const excerpt = item?.excerpt;
  const body = item?.body;
  const gallery = item?.gallery;

  const youtube = item?.youtube;

  //BEGIN OTHER LIST
  const other = data.filter(
    (v) => v.id !== id && v.cat === cat && v.type === type
  );

  const img_url = getImg ? getImg : img;

  return (
    <>
      <div className="propertydetails">
        <div>
          <div>
            <div
              className="item-img"
              style={{
                backgroundImage: `url(${img_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {gallery?.map((v, k) => {
                return (
                  <div
                    onClick={() => setImg(v)}
                    key={k}
                    style={{
                      backgroundImage: `url(${v})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                );
              })}
            </div>

            <div>
              <h3>GHs {price}</h3>
              <h4>{title}</h4>
            </div>

            <div>{body}</div>

            <div>
              <Googlemap location={cat} />
            </div>

            <div>
              <Youtubebox url={youtube} />
            </div>
          </div>

          <br />
          <div className="other-card">
            <h4>Other similar properties</h4>
            <div className="slidecard">
              {other.map((v, k) => (
                <SliderCard key={k} data={v.gallery} val={v} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>GHs {price}</h3>
            <h4>{title}</h4>
            <div>{excerpt}</div>
            <button onClick={() => setState(true)}>Request a tour</button>
          </div>
        </div>
      </div>

      <Modal component={Form} state={state} setState={setState} />
    </>
  );
};

export default Propertydetails;

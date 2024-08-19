'use client';
import Form from '@/components/Form';
import Modal from '@/components/Modal';
import SliderCard from '@/components/SliderCard';
import Youtubebox from '@/components/Youtubebox';
import useGetQuery from '@/data/query/useGetQuery';
import Googlemap from '@/utils/Googlemap';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import BlockContent from '@sanity/block-content-to-react'

const Propertydetails = () => {
  const [state, setState] = useState(false);

  const data = useGetQuery('propertycat','/propertycat') || []



  const query = useSearchParams();
  const id = query ? query.get('query') : '';

  const [getImg, setImg] = useState('');

  const item = data.filter((v: any) => v.id === id);

  //BEGIN ITEM LIST
  const title = item[0]?.title;
  const cat = item[0]?.cat;
  const price = item[0]?.price;
  const type = item[0]?.type;
  const img = item[0]?.image;
  const excerpt = item[0]?.excerpt;
  const body = item[0]?.body;
  const gallery = item[0]?.gallery;

  const youtube = item[0]?.youtube;

  //BEGIN OTHER LIST
  const other = data.filter(
    (v: any) => v.id !== id && v.cat === cat && v.type === type
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
              {gallery?.map((v: any, k: number) => {
                return (
                  <div
                    onClick={() => setImg(v)}
                    key={k}
                    style={{
                      backgroundImage: `url(${v.image})`,
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

            <div>
            <BlockContent block={body} projectid={process.env.NEXT_PUBLIC_SANITY_API_KEY} />
            </div>

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
              {other.map((v: any, k: number) => (
                <SliderCard key={k} gallery={v.gallery} singleimage={v} />
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

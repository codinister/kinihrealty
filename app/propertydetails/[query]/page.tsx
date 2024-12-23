'use client';
import Form from '@/components/Form';
import Modal from '@/components/Modal';
import SliderCard from '@/components/SliderCard';
import Youtubebox from '@/components/Youtubebox';
import useGetQuery from '@/data/query/useGetQuery';
import Googlemap from '@/utils/Googlemap';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Noslider from '@/components/Noslider';
import Slider from '@/components/Slider';
import Nav from '@/components/Nav';
import axiosfetch from '@/data/query/fetch';

const Propertydetails = (param: any) => {
  const [state, setState] = useState(false);
  const data = useGetQuery('propertycat', '/propertycat') || [];

  const id = param.params.query;
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
  const ids = item[0]?.id;
  let count = Number(item[0]?.tcount) + 1;

  useEffect(() => {
    try {
      const obj = sessionStorage.getItem('patchinfo') as any;

      const names = `${type}${ids}`;

      const val = Object.keys(JSON.parse(obj));

      if (!val.includes(names)) {
        axiosfetch({
          url: '/patch',
          method: 'patch',
          data: { id: ids, count },
        }).then((data) => {
          //console.log(data?.data);
        });

        const bj = JSON.parse(obj)
        const arr = { ...bj, [names]: 1 };

        sessionStorage.setItem('patchinfo', JSON.stringify(arr));
      }
    } catch (err) {
      console.log('CLIENT ERROR', err);
    }
  }, [ids, count, type]);

  //BEGIN OTHER LIST
  const other = data.filter(
    (v: any) => v.id !== id && v.cat === cat && v.type === type
  );

  const img_url = getImg ? getImg : img;

  const width = '100%';
  const height = '50rem';

  let image: React.ReactNode;

  if (gallery?.length) {
    image = <Slider data={gallery} height={height} width={width} />;
  } else {
    image = <Noslider width={width} height={height} url={img_url} />;
  }

  return (
    <>
      <Nav />
      <div className="propertydetails">
        <div>
          <div>
            {image}

            {/* <div
              className="item-img"
              style={{
                backgroundImage: `url(${img_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div>
              {gallery?.map((v: any, k: number) => {
                return (
                  <div
                    onClick={() => setImg(v.image)}
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
            </div> */}

            <div>
              <h3> {price}</h3>
              <h4>{title}</h4>
            </div>

            <div>
              <BlockContent
                blocks={body}
                projectid={process.env.NEXT_PUBLIC_SANITY_API_KEY}
              />
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
            <h3> {price}</h3>
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

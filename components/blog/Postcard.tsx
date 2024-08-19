'use client';

import Readmore from '../Readmore';

type PostcardType = {
  id: string;
  img: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
};

const Postcard = ({ id, img, date, title, excerpt, url }: PostcardType) => {
  const urls = `/singlepage/${id}`;

  return (
    <div className="postcard">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div>
        <div>Published on: {date}</div>
        <h4 title={title}>{title.slice(0, 20)}...</h4>
        <div>{excerpt.slice(0, 110)}...</div>
        <Readmore url={urls}>Read more</Readmore>
      </div>
    </div>
  );
};

export default Postcard;

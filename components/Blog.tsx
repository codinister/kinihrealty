import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Postbox from './Postbox';

type DT = {
  posts: DATATYPE[];
};

const Blog = ({ posts }: DT) => {
  const res = posts
    .map((v, k) => (
      <div key={k}>
        <div>
          <Postbox value={v} />
        </div>
      </div>
    ))
    .slice(0, 3);

  return (
    <div className="blog">
      <h1>Our blog</h1>
      <div className="underline"></div>
      <div>{res}</div>
    </div>
  );
};

export default Blog;

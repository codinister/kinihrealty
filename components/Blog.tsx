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
      <h2>Our blog</h2>
      <div className="underline"></div>
      <div className="container">{res}</div>

      <Link href="/">View all posts</Link>
    </div>
  );
};

export default Blog;

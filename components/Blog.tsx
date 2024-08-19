import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Postbox from './Postbox';

type DT = {
  posts: {
    body: string;
    excerpt: string;
    image: string;
    mainImage: string;
    slug: string;
    title: string;
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
  }[];
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

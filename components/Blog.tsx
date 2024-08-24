import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Postbox from './Postbox';
import Topstories from './Topstories';

const Blog = () => {
  return (
    <div className="blog">
      <h2>Our blog</h2>
      <div className="underline"></div>
      <Topstories />
      <Link href="/blog">View all posts</Link>
    </div>
  );
};

export default Blog;

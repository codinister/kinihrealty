'use client';

import { ArchiveBox, ArchiveImageBox } from '@/components/ArchiveBox';
import Nav from '@/components/Nav';
import Topstories from '@/components/Topstories';
import useGetQuery from '@/data/query/useGetQuery';

const Archive = () => {
  const blog = useGetQuery('postss', '/post') || [];

  const topblog = blog.slice(0, 4);
  const singleblog = blog.slice(4, 5);
  const bloglength = blog.length;
  const remainingblog = blog.slice(5, bloglength);

  return (
    <section>
      <Nav />
      <Topstories />

      <div className="large-arch-img">
        <ArchiveImageBox
          clss="arch-bx2"
          img={singleblog[0]?.image}
          excerpt={singleblog[0]?.excerpt}
          title={singleblog[0]?.title}
          id={singleblog[0]?._id}
        />
      </div>

      <div className="archives">
        {remainingblog.map((v: any, k: any) => (
          <ArchiveBox
            key={k}
            clss="arch-bx1"
            img={v?.image}
            excerpt={v?.excerpt}
            title={v?.title.slice(0, 63)}
            id={v?._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Archive;

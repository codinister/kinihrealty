import useGetQuery from '@/data/query/useGetQuery';
import { ArchiveBox, ArchiveImageBox } from './ArchiveBox';

const Topstories = () => {
  const blog = useGetQuery('topstories', '/post') || [];
  const topblog = blog.slice(0, 4);

  return (
    <section className="top-stories">
      <div className="container">
        <div>
          <ArchiveBox
            clss="arch-bx1"
            img={topblog[0]?.image}
            excerpt={topblog[0]?.excerpt}
            title={topblog[0]?.title.slice(0, 63)}
            id={topblog[0]?._id}
          />
        </div>
        <div>
          <ArchiveImageBox
            clss="arch-bx2"
            img={topblog[1]?.image}
            excerpt={topblog[1]?.excerpt}
            title={topblog[1]?.title}
            id={topblog[1]?._id}
          />
        </div>
        <div>
          <ArchiveBox
            clss="arch-bx3"
            img={topblog[2]?.image}
            excerpt=""
            title={topblog[2]?.title.slice(0, 27) + `...`}
            id={topblog[2]?._id}
          />
          <ArchiveBox
            clss="arch-bx4"
            img={topblog[3]?.image}
            excerpt=""
            title={topblog[3]?.title.slice(0, 27) + `...`}
            id={topblog[3]?._id}
          />
        </div>
      </div>
    </section>
  );
};

export default Topstories;

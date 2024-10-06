import useGetQuery from '@/data/query/useGetQuery';
import Sectioncard from './Sectioncard';
import { DATATYPE } from '@/types/types';
import Link from 'next/link';

type DT = {
  data: DATATYPE[];
};
const Featuredproperties = ({ data }: DT) => {
  const featured = useGetQuery('featured', '/featured') || [];
  const arr = featured.slice(0, 12);

  const remaining = featured.slice(1, featured.length);

  return (
    <div className="featuredproperties">
      <section
        style={{
          backgroundImage: `url(${arr[0]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div>
            <h4>{arr[0]?.title}</h4>

            <div>
              <span>
                <i className="fa fa-map-marker"></i>
              </span>{' '}
              <span> {arr[0]?.location}</span>
            </div>

            <div>{arr[0]?.excerpt.slice(0, 200) + '...'}</div>

            <div>
              <div>
                <h5>Log Size</h5>
                <i className="fa fa-building"></i> {arr[0]?.lot}
              </div>

              <div>
                <h5>Beds</h5>
                <i className="fa fa-bed"></i> {arr[0]?.beds}
              </div>

              <div>
                <h5>Baths</h5>
                <i className="fa fa-bath"></i> {arr[0]?.baths}
              </div>

              <div>
                <h5>Garage</h5>
                <i className="fa fa-car"></i> {arr[0]?.garage}
              </div>
            </div>

            <div>
              <h5>For {arr[0]?.proptype}</h5>

              <div>
                <span>
                  <h2> {arr[0]?.price}</h2>
                </span>
                <span>BEST DEAL</span>
                <span>
                  <Link href={`/propertydetails?query=${arr[0]?.id}`}>View Property</Link>
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <Sectioncard title="Featured properties" sub_title="" data={arr} />
    </div>
  );
};

export default Featuredproperties;

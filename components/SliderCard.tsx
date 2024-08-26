import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Slider from './Slider';
import Noslider from './Noslider';

type VAL = {
  singleimage: DATATYPE;
  gallery: string[];
};

const SliderCard = ({ singleimage, gallery }: VAL) => {
  const width = '28rem';
  const height = '20rem';

  let image: React.ReactNode;

  if (gallery?.length) {
    image = <Slider data={gallery} height={height} width={width} />;
  } else {
    image = <Noslider width={width} height={height} url={singleimage?.image} />;
  }

  const tit =
    singleimage?.title.length < 30
      ? singleimage?.title
      : singleimage?.title.slice(0, 50) + '...';

  return (
    <div className="scard">
      {image}

      <div>
        <Link href={`/propertydetails?query=${singleimage?.id}`}>
          <div className="prop-box">
            <h4>{tit}</h4>

            <div>
              <span>
                <i className="fa fa-map-marker"></i>
              </span>{' '}
              <span> {singleimage?.location}</span>
            </div>

            <div>
              <div>
                <h5>Log Size</h5>
                <i className="fa fa-building"></i> {singleimage?.lot}
              </div>

              <div>
                <h5>Beds</h5>
                <i className="fa fa-bed"></i> {singleimage?.beds}
              </div>

              <div>
                <h5>Baths</h5>
                <i className="fa fa-bath"></i> {singleimage?.baths}
              </div>

              <div>
                <h5>Garage</h5>
                <i className="fa fa-car"></i> {singleimage?.garage}
              </div>
            </div>

          
              <div>
                <span>
                  <h4> {singleimage?.price}</h4>
                </span>
              </div>
            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;

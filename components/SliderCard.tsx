import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Slider from './Slider';
import Noslider from './Noslider';

type VAL = {
  singleimage: DATATYPE;
  gallery: string[];
};

const SliderCard = ({ singleimage, gallery }: VAL) => {
  const width = '23rem';
  const height = '10rem';

  let image: React.ReactNode;


  if (gallery?.length) {
    image = <Slider data={gallery} height={height} width={width} />;
  } else {
    image = <Noslider width={width} height={height} url={singleimage?.image} />;
  }

  return (
    <div className="scard">
      {image}

      <div>
        <Link href={`/propertydetails?query=${singleimage?.id}`}>
          <h6>GHs {singleimage?.price}</h6>
          <div>{singleimage?.excerpt}</div>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;

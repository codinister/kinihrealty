import { DATATYPE } from '@/types/types';
import Link from 'next/link';
import Slider from './Slider';
import Noslider from './Noslider';

type VAL = {
  val: DATATYPE;
  data: string[] | undefined;
};

const SliderCard = ({ val, data }: VAL) => {
  const width = '23rem';
  const height = '10rem';

  let image: React.ReactNode;
  const arr = data;

  if (data?.length) {
    image = <Slider data={data} height={height} width={width} />;
  } else {
    image = <Noslider width={width} height={height} url={val?.img} />;
  }

  return (
    <div className="scard">
      {image}

      <div>
        <Link href={`/propertydetails?query=${val?.id}`}>
          <h6>GHs {val?.price}</h6>
          <div>{val?.excerpt}</div>
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;

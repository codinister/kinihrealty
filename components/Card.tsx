import { DATATYPE } from '@/types/types';
import Link from 'next/link';


type VAL = {
  val: DATATYPE
}

const Card = ({val}: VAL) => {
  return (
    <div className="s-card">
      <Link href={`/propertydetails?query=${val?.id}`}>
        <div
          style={{
            backgroundImage: `url(${val?.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </Link>
      <div>
        <h4>GHs {val?.price}</h4>
        <div>{val?.excerpt}</div>
      </div>
    </div>
  );
};

export default Card;

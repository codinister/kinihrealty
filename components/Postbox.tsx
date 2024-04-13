import { DATATYPE } from '@/types/types';
import Link from 'next/link';

type POSTBOXTYPE = {
  value: DATATYPE;
};

const Postbox = ({ value }: POSTBOXTYPE) => {
  return (
    <div className="post-box">
      <div>
        <div>
          <h2>{value.title}</h2>
          <div>{value.excerpt}</div>
          <Link href="/">Read more</Link>
        </div>
      </div>

      <div>
        <div className="stack two"></div>
        <div
          className="stack one"
          style={{
            backgroundImage: `url(${value.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Postbox;

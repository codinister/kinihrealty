import Link from 'next/link';

type POSTBOXTYPE = {
  value: any;
};

const Postbox = ({ value }: POSTBOXTYPE) => {
  return (
    <div className="post-box">
      <div
        style={{
          backgroundImage: `url(${value.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div>
        <h4>{value.title}</h4>
        <div>{value.excerpt}</div>
        <button>
          <Link href={`/singlepage/${value?._id}`}>Read more...</Link>
        </button>
      </div>
    </div>
  );
};

export default Postbox;

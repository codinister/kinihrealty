import Link from 'next/link'



type ArchiveBoxType = {
  clss: string;
  img: string;
  excerpt: string;
  title: string;
  id: string
};





export const ArchiveBox = ({ clss, img, excerpt, title,id }: ArchiveBoxType) => {
  return (
    <Link href={`/singlepage/${id}`} style={{color: "#777"}}>
    <div className="archbx">
      <div
        className={clss}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div>
        <h4>{title}</h4>
        <div>{excerpt}</div>
      </div>
    </div>
    </Link>
  );
};




export const ArchiveImageBox = ({
  clss,
  img,
  title,
  excerpt,
  id
}: ArchiveBoxType) => {
  return (
    <Link href={`/singlepage/${id}`} className="links">
    <div
      className={clss}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >

      <div>
      <h3>{title}</h3>
      <div>{excerpt}</div>
      </div>

    </div>
    </Link>
  );
};

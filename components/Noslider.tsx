import Link from "next/link";

type Noslidertype = {
  height: string;
  width: string;
  url: string;
};

const Noslider = ({ height, width, url }: Noslidertype) => {
  return (
    <Link href={url}
      style={{
        display: 'block',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height,
        width,
      }}>
    
    </Link>
  );
};

export default Noslider;

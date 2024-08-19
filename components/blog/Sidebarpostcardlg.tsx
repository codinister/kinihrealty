'use client'

import { useRouter } from "next/navigation";


const Sidebarpostcardlg = ({
  data,
}: {
  data: { _id: string; title: string; image: string; excerpt: string }[]
}) => {

  const router = useRouter();

  const id = data[0]?._id
  const title = data[0]?.title
  const image = data[0]?.image
  const excerpt = data[0]?.excerpt

  const handleClick = (val: string) => {
    router.push(`/singlepage/${val}`);
  };

  return (
    <div
    onClick={() => handleClick(id)}
      className="sidebarpostcardlg"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

        <h5>{title?.slice(0,20)}...</h5>

        <div>{excerpt?.slice(0, 100)}...</div>

    </div>
  );
};

export default Sidebarpostcardlg;

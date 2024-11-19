
import Imagemodal2 from './Imagemodal2';
import { useState } from 'react';

type Noslidertype = {
  height: string;
  width: string;
  url: string;
};

type DT = {
  data: any;
  height: string;
  width: string;
};

type getimgsType = string;

const Noslider = ({ height, width, url }: Noslidertype) => {
  const [getimgs, setImgs] = useState<getimgsType>();
  const [showModal, setShowModal] = useState(false);

  const Handleclick = () => {
    setImgs(url);
    setShowModal(true);
  };

  return (
    <>
      <div
        onClick={Handleclick}
        style={{
          display: 'block',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height,
          width,
          cursor: 'pointer',
        }}
      ></div>
      {showModal ? (
        <Imagemodal2 img={getimgs} setShowModal={setShowModal} />
      ) : (
        ''
      )}
    </>
  );
};

export default Noslider;

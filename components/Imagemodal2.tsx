import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type getimgsType = {
  img: any;
  setShowModal: Function;
};

const Imagemodal2 = ({ img, setShowModal }: getimgsType) => {
  const [windstate, setWindstate] = useState(false);
  const url = useRef<any>();

  useEffect(() => {
    if (typeof window === 'object') {
      document.body.style.overflow = 'hidden';
      setWindstate(true);
    }
  }, []);

  const handleClick = () => {
    setShowModal(false);
    document.body.style.overflow = 'scroll';
  };




  return windstate ? (
    createPortal(
      <div className="imagemodalwrapper">
        <div className="imagemodal" onClick={handleClick}></div>
        <div className="imagemodal-inner">
          <div>
            <a href={img}>
              <Image src={img} alt="" width="600" height="450" />
              </a>
          </div>

        </div>
      </div>,
      document.body as HTMLElement
    )
  ) : (
    <></>
  );
};

export default Imagemodal2;

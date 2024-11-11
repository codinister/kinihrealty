import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type getimgsType = {
  img: any;
  setShowModal: Function;
};

const Imagemodal = ({ img, setShowModal }: getimgsType) => {
  const [windstate, setWindstate] = useState(false);
  const r = useRef()

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



  const currentImage = img[0]?.url;
  const otherImages = img.slice(1, img.length);



  const [getImage, setImage] = useState(currentImage);

  return windstate ? (
    createPortal(
      <div className="imagemodal" onClick={handleClick}>
        <div className="imagemodal-inner">
          <div>
            <Image src={getImage} alt="" width="700" height="1000" />
          </div>

          <div>
            {otherImages.map((v: any, k: number) => {
              return (
                <div
                onClick={()=> setImage(v.url)}
                  style={{
                    height: '7rem',
                    backgroundImage: `url(${v.url})`,
                    backgroundSize: 'cover',
                  }}
                  key={k}
                ></div>
              );
            })}
          </div>
        </div>
      </div>,
      document.body as HTMLElement
    )
  ) : (
    <></>
  );
};

export default Imagemodal;
